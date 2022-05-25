'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const MarkdownEditor = ({ value, handleChange }) => (
  <div className='editor'>
    <textarea
      name='textarea'
      value={value}
      onChange={handleChange}
      autoFocus
    />

    <div className='view'>
      {value}
    </div>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
