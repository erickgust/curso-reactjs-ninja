'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../pagination'

import './repos.css'

const Repos = ({ title, repos, handlePage }) => (
  <div className='repos-list'>
    <h2>{title}:</h2>
    <ul>
      {repos.repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.url}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={repos.total} activePage={repos.activePage} onClick={handlePage} />
  </div>
)

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.array.isRequired,
    activePage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  handlePage: PropTypes.func.isRequired
}

export default Repos
