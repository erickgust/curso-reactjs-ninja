'use strict'

import React from 'react'
import { SaveMessage } from './index'

export default {
  component: SaveMessage,
  title: 'SaveMessage'
}

const Template = args => <SaveMessage {...args} />

export const WithNull = Template.bind({})
WithNull.args = {
  isSaving: null
}
WithNull.storyName = 'With isSaving === null'

export const WithTrue = Template.bind({})
WithTrue.args = {
  isSaving: true
}
WithTrue.storyName = 'With isSaving === true'

export const WithFalse = Template.bind({})
WithFalse.args = {
  isSaving: false
}
WithFalse.storyName = 'With isSaving === false'
