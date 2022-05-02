'use strict'

import React from 'react'
import User from '../user'
import Search from '../search'
import Actions from '../actions'
import Repos from '../repos'
import { PropTypes } from 'prop-types'
import './app.css'

const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStars
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Loading...</div>}
    {!!userInfo && <User userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStars={getStars} />}
    {
      !!repos.length &&
        <Repos
          title='Repositórios'
          repos={repos}
        />
    }
    {
      !!starred.length &&
        <Repos
          title='Favoritos'
          repos={starred}
        />
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStars: PropTypes.func.isRequired
}

export default AppContent
