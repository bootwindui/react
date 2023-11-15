import React from 'react';
import { Meta } from '@storybook/react';
import { Badge, BadgeProps } from '../src/index';

import { FaRegEnvelope } from 'react-icons/fa6'; // Import ikon dari react-icons atau dari sumber lain

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'ghost'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] },
    },
  },
} as Meta;

export const Variants = (args: BadgeProps) => {
  const variants = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];
  return (
    <div >
      <Badge>Primary</Badge>
    </div>
  )
}

export const Sizes = (args: BadgeProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    
  </div>
);