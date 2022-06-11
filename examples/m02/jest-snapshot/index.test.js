'use strict'

const responseFromServer = () => [
  'react',
  'javascript',
  'node'
]

it('Testing snapshots', () => {
  expect(responseFromServer()).toMatchSnapshot()
})
