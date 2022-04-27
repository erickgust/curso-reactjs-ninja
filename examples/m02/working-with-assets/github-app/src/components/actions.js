'use strict'

import { PropTypes } from 'prop-types'
import React from 'react'

const Actions = ({ getRepos, getStars }) => (
  <div className='user-actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStars}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStars: PropTypes.func.isRequired
}

export default Actions
