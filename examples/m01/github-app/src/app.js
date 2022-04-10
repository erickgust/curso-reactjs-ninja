'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search-bar'>
      <input type='search' placeholder='Digite o usuário' />
    </div>

    <div className='git-user'>
      <img src='https://avatars.githubusercontent.com/u/83595333?v=4' />
      <h1 className='username'>
        <a href='https://github.com/erickgust'>Erick Gustavo</a>
      </h1>

      <ul className='user-info'>
        <li>Repositórios: 13</li>
        <li>Seguidores: 0</li>
        <li>Seguindo: 3</li>
      </ul>

      <div className='user-actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='user-repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='user-stars'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
