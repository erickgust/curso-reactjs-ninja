'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from '.'

storiesOf('<Pagination />', module)
  .add('without props', () => (
    <Pagination total={10}/>
  ))
