'use strict'

import React from 'react'
import User from './user'
import Search from './search'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
  <div className='app'>
    <Search />
    <User />
    <Actions />
    <Repos
      className='user-repos'
      title='Repositórios'
      repos={[
        {
          name: 'Nome do repositório',
          url: '#',
          id: 1
        },
        {
          name: 'Nome do repositório',
          url: '#',
          id: 2
        }
      ]}
    />
    <Repos
      className='user-stars'
      title='Favoritos'
      repos={[
        {
          name: 'Nome do repositório',
          url: '#',
          id: 1
        },
        {
          name: 'Nome do repositório',
          url: '#',
          id: 2
        }
      ]}
    />
  </div>
)

export default AppContent
