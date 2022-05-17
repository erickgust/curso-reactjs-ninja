'use strict'

import React from 'react'

const Dots = () => <span>...</span>

const Page = ({ page, pageLink, onClick }) => {
  const Tag = page === '...' ? Dots : 'a'

  const handleClick = !onClick
    ? null
    : (e) => {
        e.preventDefault()
        onClick(page)
      }

  return (
    <Tag href={pageLink} onClick={handleClick}>
      {page}
    </Tag>
  )
}

export default Page
