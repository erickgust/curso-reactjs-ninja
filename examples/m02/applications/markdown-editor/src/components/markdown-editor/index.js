'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { MarkdownFooter } from '../markdown-footer'

export const MarkdownEditor = ({ value, isSaving, handleChange, getMarkup, handleRemove }) => (
  <section className='main-editor'>
    <textarea
      name='textarea'
      value={value}
      onChange={handleChange}
      autoFocus
      className='editor'
    />

    <div className='view' dangerouslySetInnerHTML={getMarkup()}/>

    <MarkdownFooter isSaving={isSaving} handleRemove={handleRemove}/>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  ...MarkdownFooter.propTypes
}
