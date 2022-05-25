'use strict'

import React, { Component } from 'react'
import { MarkdownEditor } from './markdown-editor'
import { marked } from 'marked'

import './css/style.css'
import { sanitize } from 'dompurify'

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
