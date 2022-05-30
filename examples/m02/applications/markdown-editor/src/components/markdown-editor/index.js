'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const MarkdownEditor = ({ value, handleChange, getMarkup, handleSave }) => (
  <section className='main-editor'>
    <textarea
      name='textarea'
      value={value}
      onChange={handleChange}
      autoFocus
      className='editor'
    />

    <div className='view' dangerouslySetInnerHTML={getMarkup()}/>

    <button onClick={handleSave} className='save-button'>
      Salvar
    </button>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}
