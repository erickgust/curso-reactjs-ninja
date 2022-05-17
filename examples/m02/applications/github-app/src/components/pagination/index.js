'use strict'

import React from 'react'
import pagination from 'utils/pagination'

const Pagination = ({ total, activePage }) => (
  <ul>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index}>{page}</li>
    ))}
  </ul>
)

export default Pagination
