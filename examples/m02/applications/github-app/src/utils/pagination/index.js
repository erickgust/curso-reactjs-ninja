'use strict'

function centerItems ({ activePage, total }) {
  if (activePage - 1 <= 0) {
    return 1
  }

  if (activePage === total) {
    return activePage - 2
  }

  return activePage - 1
}

function pagination ({ total, activePage }) {
  if (total <= 5) {
    return Array.from({ length: total }, (item, index) => index + 1)
  }

  const visiblePages = 3
  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (item, index) => index + centerItems({ activePage, total })),
    total
  ].filter((page, index, array) => array.indexOf(page) === index)

  let firstPage = pages.at(0)
  let secondPage = pages.at(1)

  if (secondPage === firstPage + 2) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1)
    ]
  }

  firstPage = pages.at(0)
  secondPage = pages.at(1)

  if (secondPage >= firstPage + 2) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1)
    ]
  }

  let penultimatePage = pages.at(-2)
  let lastPage = pages.at(-1)

  if (penultimatePage === lastPage - 2) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage
    ]
  }

  penultimatePage = pages.at(-2)
  lastPage = pages.at(-1)

  if (penultimatePage <= lastPage - 2) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
  }

  return pages
}

export default pagination
