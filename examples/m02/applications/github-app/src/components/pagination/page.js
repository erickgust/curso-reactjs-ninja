'use strict'

import React from 'react'

const Dots = ({ className }) => <span className={className}>...</span>

const Page = ({ page, pageLink, onClick }) => {
  const Tag = page === '...' ? Dots : 'a'

  const handleClick = !onClick
    ? null
    : (e) => {
        e.preventDefault()
        onClick(page)
      }

  return (
    <Tag href={pageLink} onClick={handleClick} className='pagination-link'>
      {page}
    </Tag>
  )
}

export default Page
