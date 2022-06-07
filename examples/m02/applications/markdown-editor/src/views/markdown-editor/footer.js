'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components/button'
import { SaveMessage } from '../../components/save-message'

export const MarkdownFooter = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <footer className='markdown-footer'>
    <input type='text' value={title} onChange={handleChange('title')} />

    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>Novo</Button>
    <Button onClick={handleRemove} kind='danger'>Deletar</Button>
  </footer>
)

MarkdownFooter.propTypes = {
  isSaving: PropTypes.bool,
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}
