'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Repositório' />
  ))
  .add('with repos prop', () => (
    <Repos
      title='Favoritos'
      repos={[
        {
          url: '#',
          name: 'erickgust',
          id: '123'
        }
      ]}
    />
  ))
