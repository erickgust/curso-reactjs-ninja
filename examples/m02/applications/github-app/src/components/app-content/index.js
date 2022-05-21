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
  getStars,
  handlePage
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Loading...</div>}
    {!!userInfo && <User userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStars={getStars} />}
    <div className='repos-wrapper'>
      {
        !!repos.repos.length &&
          <Repos
            title='Repositórios'
            repos={repos}
            handlePage={(page) => handlePage('repos', page)}
          />
      }
      {
        !!starred.repos.length &&
          <Repos
            title='Favoritos'
            repos={starred}
            handlePage={(page) => handlePage('starred', page)}
          />
      }
    </div>
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.object.isRequired,
  starred: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStars: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired
}

export default AppContent
