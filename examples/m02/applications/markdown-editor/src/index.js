'use strict'

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const root = createRoot(document.querySelector('[data-js="root"]'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
