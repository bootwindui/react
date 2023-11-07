import React from 'react';
import { Meta } from '@storybook/react';
import Toggle, { ToggleProps } from '../src/index';

import { FaMoon, FaSun } from 'react-icons/fa6';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    enabled: { control: 'boolean' },
  },
} as Meta;

export const ToggleDark = (args: ToggleProps) => (
  <div className="flex flex-col space-y-4">
    <Toggle
      onToggle={isEnabled => console.log('Switch toggled:', isEnabled)}
      color="primary"
      iconOn={
        <FaSun className="text-primary h-3 w-3 mt-1 mx-auto justify-center items-center" />
      }
      iconOff={<FaMoon className="text-gray-500 h-3 w-3 mx-auto mt-1" />}
    />
    <Toggle
      onToggle={isEnabled => console.log('Switch toggled:', isEnabled)}
      color="secondary"
      iconOn={
        <FaSun className="text-black h-3 w-3 mt-1 mx-auto justify-center items-center" />
      }
      iconOff={<FaMoon className="text-gray-500 h-3 w-3 mx-auto mt-1" />}
    />
    <Toggle
      onToggle={isEnabled => console.log('Switch toggled:', isEnabled)}
      color="primary"
    />
    <Toggle
      onToggle={isEnabled => console.log('Switch toggled:', isEnabled)}
      color="secondary"
    />
  </div>
);