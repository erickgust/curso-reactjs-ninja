'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export const SaveMessage = ({ isSaving }) => (
  isSaving !== null && (
    <p className='save'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  )
)

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}
