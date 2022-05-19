'use strict'

import React from 'react'
import User from 'components/user'
import Search from 'components/search'
import Actions from 'components/actions'
import Repos from 'components/repos'
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
    <div className='repos-wrapper'>
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
