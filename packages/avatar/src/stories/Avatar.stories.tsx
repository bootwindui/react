import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarProps } from '../index';
import Title from '@bootwind/title';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    notificationDot: {
      options: [null, 'gray', 'red', 'green'],
      control: { type: 'radio' },
    },
    showPlaceholder: {
      description: 'Show avatar placeholder if `src` is null',
      control: 'boolean',
    },
  },
} as Meta;
type Story = StoryObj<AvatarProps>;

export const Basic: Story = {
  args: {
    rounded: 'full',
    notificationDot: 'gray',
    alt: 'User 1 Avatar',
    showPlaceholder: false,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
}