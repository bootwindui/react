import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HiOutlineArrowRight } from 'react-icons/hi'

import Title from '@bootwind/title';
import { Button, ButtonProps } from '../index';
import { FaRegEnvelope } from 'react-icons/fa6';

export default {
  title: '❖ • Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: "Button"
  },
  argTypes: {
    children: {
      type: 'string',
      description: "Content of the button",
      control: {
        type: 'text',
      }
    },
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'ghost'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] },
    },
    leftIcon: {
      control: {
        mapping: {
          empty: [],
        }
      },
    },
    rightIcon: {
      control: {
        mapping: {
          empty: [],
        }
      },
    },
  },
} as Meta;
type Story = StoryObj<ButtonProps>;

export const Basic: Story = {
  args: {
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    size: 'lg',
  }
}
export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: "Small"
  }
}
export const SizeMedium: Story = {
  args: {
    size: 'md',
    children: "Small"
  }
}
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: "Small"
  }
}
export const VariantPrimary: Story = {
  args: {
    children: "Click Me",
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    variant: 'primary'
  }
}
export const VariantSecondary: Story = {
  args: {
    children: "Click Me",
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    variant: 'secondary'
  }
}
export const VariantTextOnly: Story = {
  args: {
    children: "Click Me",
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    variant: 'text-only'
  }
}
export const Disabled = (args: ButtonProps) => (
  <Button {...args} disabled={true} rightIcon={<HiOutlineArrowRight />} leftIcon={<FaRegEnvelope />}></Button>
)