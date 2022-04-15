'use strict'

import { PropTypes } from 'prop-types'
import React from 'react'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search-bar'>
    <input
      type='search'
      placeholder='Digite o usuário'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
