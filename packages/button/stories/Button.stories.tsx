import React from 'react';
import { Meta } from '@storybook/react';

import Title from '../../title/src/index';
import { Button, ButtonProps } from '../src/index';
import { FaRegEnvelope } from 'react-icons/fa6';

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
  <>
    <Title
      title="Buttons"
      description="The Forms component in the Bootwind Design System provides a fundamental building block for user input and interaction. Customize form fields, layouts, and validation to create user-friendly and functional forms that seamlessly integrate with your design. Whether you're collecting user data, processing payments, or enabling various interactions, the Forms component ensures a smooth and intuitive experience for users as they engage with your application or website."
    />

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
  </>
);

export const Sizes = (args: ButtonProps) => (
  <>
    <Title
      title="Buttons"
      description="The Forms component in the Bootwind Design System provides a fundamental building block for user input and interaction. Customize form fields, layouts, and validation to create user-friendly and functional forms that seamlessly integrate with your design. Whether you're collecting user data, processing payments, or enabling various interactions, the Forms component ensures a smooth and intuitive experience for users as they engage with your application or website."
    />
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
  </>
);