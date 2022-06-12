import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './index'

it('Default Button should match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>
      Default
    </Button>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('Success Button should match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='success'>
      Success
    </Button>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('Danger Button should match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='danger'>
      Danger
    </Button>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
