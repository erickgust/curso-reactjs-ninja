'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <textarea
      name='textarea'
      value={value}
      onChange={handleChange}
      autoFocus
    />

    <div className='view' dangerouslySetInnerHTML={getMarkup()}/>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}
