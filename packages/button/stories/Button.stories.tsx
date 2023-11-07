import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../src/index';

import { FaRegEnvelope } from 'react-icons/fa6'; // Import ikon dari react-icons atau dari sumber lain

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'ghost'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] },
    },
  },
} as Meta;

export const Variants = (args: ButtonProps) => (
  <div className="flex flex-col space-y-8">
    <div>
      <Button variant="primary">Primary</Button>
    </div>
    <div>
      <Button hasArrow={true} variant="primary">
        Primary with Arrow
      </Button>
    </div>
    <div>
      <Button icon={<FaRegEnvelope />} hasArrow={true} variant="primary">
        Primary with Arrow and Icon
      </Button>
    </div>
    <div>
      <Button variant="secondary">Secondary</Button>
    </div>
    <div>
      <Button variant="ghost">Ghost</Button>
    </div>
  </div>
);

export const Sizes = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button size="sm">Small</Button>
    </div>
    <div>
      <Button size="md">Medium</Button>
    </div>
    <div>
      <Button size="lg">Large</Button>
    </div>
  </div>
);