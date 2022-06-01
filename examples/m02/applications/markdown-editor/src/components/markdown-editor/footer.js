'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const MarkdownFooter = ({ isSaving, handleRemove, handleCreate }) => (
  <footer className='markdown-footer'>
    <p className='save'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>

    <button onClick={handleCreate}>
      Criar novo
    </button>

    <button onClick={handleRemove} className='remove'>
      Deletar
    </button>
  </footer>
)

MarkdownFooter.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}
