'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const MarkdownFooter = ({ isSaving }) => (
  <footer className='markdown-footer'>
    <p className='save'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  </footer>
)

MarkdownFooter.propTypes = {
  isSaving: PropTypes.bool.isRequired
}
