'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './repos.css'

const Repos = ({title, repos }) => (
  <div className='repos-list'>
    <h2>{title}:</h2>
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
