'use strict'

import { action } from '@storybook/addon-actions'
import React from 'react'
import { Button } from './index'

export default {
  component: Button,
  title: 'Button'
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: action(Default),
  children: 'Default'
}

export const Success = Template.bind({})
Success.args = {
  onClick: action('Success'),
  children: 'Success',
  kind: 'success'
}
export const Danger = Template.bind({})
Danger.args = {
  onClick: action('Danger'),
  children: 'Danger',
  kind: 'danger'
}
