'use strict'

import { PropTypes } from 'prop-types'
import React from 'react'

const User = ({ userInfo }) => (
  <div className='git-user'>
    <img src={userInfo.avatar} />
    <h1 className='username'>
      <a href={`https://github.com/${userInfo.login}`}>
        {userInfo.name}
      </a>
    </h1>

    <ul className='user-info'>
      <li>Repositórios: {userInfo.repos}</li>
      <li>Seguidores: {userInfo.followers}</li>
      <li>Seguindo: {userInfo.following}</li>
    </ul>
  </div>
)

User.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default User
