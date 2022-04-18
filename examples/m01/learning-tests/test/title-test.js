'use strict'

const { renderToStaticMarkup } = require('react-dom/server')
const { createElement } = require('react')

const Title = require('./title')
const TitleComponent = renderToStaticMarkup(
  createElement(Title)
)

console.log(TitleComponent)

