'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const MarkdownFooter = ({ handleSave }) => (
  <footer className='markdown-footer'>
    <button onClick={handleSave} className='save-button'>
      Salvar
    </button>
  </footer>
)

MarkdownFooter.propTypes = {
  handleSave: PropTypes.func.isRequired
}
