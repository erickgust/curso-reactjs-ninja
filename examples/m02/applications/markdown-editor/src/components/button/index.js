import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={`main-button ${kind ? '-' + kind : ''}`}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}
