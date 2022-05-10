'use strict'

function pagination ({ total, activePage }) {
  if (total <= 5) {
    return Array.from({ length: total }, (item, index) => index + 1)
  }

  return [1, '...', 4, 5, 6, '...', 10]
}

export default pagination
