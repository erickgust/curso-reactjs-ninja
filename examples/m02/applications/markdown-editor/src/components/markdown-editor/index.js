'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { MarkdownFooter } from './footer'

export const MarkdownEditor = ({ value, handleChange, getMarkup, ...props }) => (
  <section className='main-editor'>
    <textarea
      name='textarea'
      value={value}
      onChange={handleChange}
      autoFocus
      className='editor'
    />

    <div className='view' dangerouslySetInnerHTML={getMarkup()}/>

    <MarkdownFooter {...props} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}
