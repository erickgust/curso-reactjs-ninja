'use strict'

import React from 'react'
import User from './user'
import Search from './search'
import Actions from './actions'
import Repos from './repos'
import { PropTypes } from 'prop-types'

const AppContent = ({ userInfo, repos, stars, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userInfo && <User userInfo={userInfo} />}
    {!!userInfo && <Actions />}
    {
      !!repos.length &&
        <Repos
          className='user-repos'
          title='Repositórios'
          repos={repos}
        />
    }
    {
      !!stars.length &&
        <Repos
          className='user-stars'
          title='Favoritos'
          repos={stars}
        />
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired
}

export default AppContent
