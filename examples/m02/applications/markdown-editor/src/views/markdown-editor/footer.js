'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components/button'
import { SaveMessage } from '../../components/save-message'

export const MarkdownFooter = ({ isSaving, handleRemove, handleCreate }) => (
  <footer className='markdown-footer'>
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>Novo</Button>
    <Button onClick={handleRemove} kind='danger'>Deletar</Button>
  </footer>
)

MarkdownFooter.propTypes = {
  isSaving: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}