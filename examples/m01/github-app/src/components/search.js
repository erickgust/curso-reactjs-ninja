'use strict'

import { PropTypes } from 'prop-types'
import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search-bar'>
    <input
      type='search'
      placeholder='Digite o usuário'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
