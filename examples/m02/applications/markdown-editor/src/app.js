'use strict'

import React, { Component } from 'react'
import { sanitize } from 'dompurify'
import { marked } from 'marked'
import { v4 } from 'uuid'
import { MarkdownEditor } from './views/markdown-editor'

import './css/style.css'

import('highlight.js').then(({ default: hljs }) => {
  marked.setOptions({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    }
  })
})

export class App extends Component {
  constructor () {
    super()

    this.clearState = () => ({
      title: '',
      value: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      files: {},
      isSaving: null
    }

    this.handleChange = (type) => (e) => {
      this.setState({
        [type]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => (
      { __html: sanitize(marked(this.state.value)) }
    )

    this.handleSave = () => {
      if (this.state.isSaving) {
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem titulo',
            content: this.state.value
          }
        }

        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({
          isSaving: false,
          files
        })
      }
    }

    this.handleRemove = () => {
      const { [this.state.id]: deleted, ...files } = this.state.files
      const fileId = Object.keys(files)[0]

      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({ files })

      if (fileId === undefined) {
        return this.setState({
          ...this.clearState()
        })
      }

      this.setFileInfo(files, fileId)
    }

    this.handleCreate = () => {
      this.setState({ ...this.clearState() })
      this.textarea.focus()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.setFileInfo = (files, fileId) => {
      this.setState({
        title: files[fileId].title,
        value: files[fileId].content,
        id: fileId
      })
    }

    this.handleOpenFile = (fileId) => () => (
      this.setFileInfo(this.state.files, fileId)
    )
  }

  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({ files })
  }

  componentDidUpdate () {
    clearTimeout(this.timer)
    this.timer = setTimeout(this.handleSave, 800)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        files={this.state.files}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        handleOpenFile={this.handleOpenFile}
        textareaRef={this.textareaRef}
        getMarkup={this.getMarkup}
        title={this.state.title}
      />
    )
  }
}
