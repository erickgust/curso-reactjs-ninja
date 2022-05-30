'use strict'

import React, { Component } from 'react'
import { MarkdownEditor } from './components/markdown-editor'
import { sanitize } from 'dompurify'
import { marked } from 'marked'

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
      value: ''
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }

    this.getMarkup = () => (
      { __html: sanitize(marked(this.state.value)) }
    )

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value })
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleSave={this.handleSave}
      />
    )
  }
}
