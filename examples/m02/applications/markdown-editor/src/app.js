'use strict'

import React, { Component } from 'react'
import { MarkdownEditor } from './markdown-editor'
import { sanitize } from 'dompurify'
import { marked } from 'marked'
import hljs from 'highlight.js'

import './css/style.css'

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
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
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}
