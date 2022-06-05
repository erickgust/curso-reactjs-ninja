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
    this.state = {
      value: '',
      id: v4(),
      files: {},
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => (
      { __html: sanitize(marked(this.state.value)) }
    )

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({ isSaving: false })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.setState({ value: '', id: v4() })
    }

    this.handleCreate = () => {
      this.setState({ value: '', id: v4() })
      this.textarea.focus()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({ value: this.state.files[fileId], id: fileId })
    }
  }

  componentDidMount () {
    this.setState({ files: { ...localStorage } })
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
      />
    )
  }
}
