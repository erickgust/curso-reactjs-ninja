import { Counter } from './index'

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {
    decrement: { action: 'decrement' },
    increment: { action: 'increment' }
  }
}

const Template = (args) => <Counter {...args} counter={0} />

export const Main = Template.bind({})

