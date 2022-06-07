'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { MarkdownFooter } from './footer'
import { Files } from '../files'

export const MarkdownEditor = ({
  value,
  handleChange,
  getMarkup,
  textareaRef,
  files,
  handleOpenFile,
  ...props
}) => (
  <section className='main-editor'>
    <Files files={files} handleOpenFile={handleOpenFile} />

    <textarea
      name='textarea'
      value={value}
      onChange={handleChange('value')}
      autoFocus
      className='editor'
      ref={textareaRef}
    />

    <div className='view' dangerouslySetInnerHTML={getMarkup()}/>

    <MarkdownFooter {...props} handleChange={handleChange} />
  </section>
)

MarkdownEditor.propTypes = {
  ...Files.propTypes,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}
