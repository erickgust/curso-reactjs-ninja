'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={() => alert('Favoritado')}>
    Like
  </Button>
)

export default LikeButton
