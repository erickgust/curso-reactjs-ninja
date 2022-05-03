'use strict'

import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import Actions from './index'

storiesOf('Actions', module)
  .add('first story', () => (
    <Actions
      getRepos={action('Get repos')}
      getStars={action('Get stars')}
    />
  ))
  .add('second story', () => (
    <Actions
      getRepos={action('Get repos')}
      getStars={action('Get stars')}
    />
  ))
