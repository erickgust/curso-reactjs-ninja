'use strict'

import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import Actions from './index'

storiesOf('Actions', module)
  .add('Actions component', () => (
    <Actions
      getRepos={action('Get repos')}
      getStars={action('Get stars')}
    />
  ))
