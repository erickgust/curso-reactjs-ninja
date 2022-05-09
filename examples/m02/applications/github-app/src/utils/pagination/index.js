'use strict'

function pagination ({ total, activePage }) {
  return Array.from({ length: total }, (item, index) => index + 1)
}

export default pagination
