import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { IButtonProps } from './Button'

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<IButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  loading: false,
}
