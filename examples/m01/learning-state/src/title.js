'use strict'

import React from 'react'

const Title = ({ name }) => (
  <h1>Olá {name}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido'
}

export default Title
