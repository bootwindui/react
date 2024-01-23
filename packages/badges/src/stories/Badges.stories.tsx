import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from '@bootwind/title';
import { Badge, BadgeProps } from '../index';
import { FaRegEnvelope } from 'react-icons/fa6'; // Import ikon dari react-icons atau dari sumber lain

export default {
  title: '❖ • UI Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'neutral', 'warning', 'success', 'error'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    children: {
      description: "The badge text",
      control: {
        type: 'text'
      }
    }
  },
} as Meta;

type Story = StoryObj<BadgeProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  }
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  }
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    withDot: true
  }
};

export const Success: Story = {
  args: {
    variant: 'success',
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
    withIcon: <span>🚨</span>
  }
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large'
  }
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    withIcon: <span>🌟</span>
  }
};

export const WithDotAndIcon: Story = {
  args: {
    variant: 'warning',
    withDot: true,
    withIcon: <span>🔔</span>,
  }
};
export const AllBadges = () => (
  <div className='flex gap-3'>
    <Badge variant="warning" withIcon={<FaRegEnvelope />}>
      Warning
    </Badge>
    <Badge variant="primary" withIcon={<FaRegEnvelope />}>
      Primary
    </Badge>
    <Badge variant="error" withIcon={<FaRegEnvelope />}>
      Error
    </Badge>
    <Badge variant="neutral" withIcon={<FaRegEnvelope />}>
      Neutral
    </Badge>
    <Badge variant="success" withIcon={<FaRegEnvelope />}>
      Success
    </Badge>
  </div>
);
