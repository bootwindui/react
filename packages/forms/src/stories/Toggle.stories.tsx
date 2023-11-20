import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from '@bootwind/title';
import { Toggle, ToggleProps } from '../index';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default {
  title: 'Components/Forms/Toggle',
  tags: ['autodocs'],
  component: Toggle,
  argTypes: {
    enabled: { control: 'boolean' },
  },
} as Meta;
type Story = StoryObj<ToggleProps>;


export const Basic: Story = {
  args: {
    color: 'primary'
  }
}
export const WithIcon: Story = {
  args: {
    color: 'primary',
    iconOn: (<FaSun className="text-primary h-3 w-3 mt-1 mx-auto justify-center items-center" />),
    iconOff: (<FaMoon className="text-gray-500 h-3 w-3 mx-auto mt-1" />)
  }
}