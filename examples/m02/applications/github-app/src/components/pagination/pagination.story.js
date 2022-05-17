'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from '.'

storiesOf('<Pagination />', module)
  .add('without props', () => (
    <Pagination />
  ))

  .add('with total and activePage', () => (
    <Pagination total={10} activePage={5} />
  ))

  .add('with page link', () => (
    <Pagination total={10} activePage={5} pageLink='https://mypage.com/page/%page%' />
  ))

  .add('with callback', () => (
    <Pagination
      total={10}
      activePage={5}
      pageLink='https://mypage.com/page/%page%'
      onClick={(page) => {
        window.alert(page)
      }}
    />
  ))
