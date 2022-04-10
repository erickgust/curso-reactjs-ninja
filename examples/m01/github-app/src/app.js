'use strict'

import React from 'react'
import Actions from './components/actions'
import Repos from './components/repos'
import Search from './components/search'
import User from './components/user'

const App = () => (
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

export default App
