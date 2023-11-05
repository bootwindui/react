import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Avatar, { AvatarProps } from '../src/components/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    rounded: {
      control: {
        type: 'radio',
        options: ['none', 'sm', 'md', 'lg', 'full'],
      },
    },
    notificationDot: {
      control: {
        type: 'radio',
        options: [null, 'gray', 'red', 'green'],
      },
    },
    showPlaceholder: {
      control: 'boolean', // Tambahkan properti showPlaceholder
    },
  },
} as Meta;

export const Avatars = (args: AvatarProps) => (
  <div className="flex space-x-4">
    <Avatar
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="User 1"
      {...args}
    />
    <Avatar
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="User 2"
      {...args}
    />
    <Avatar alt="User 2" {...args} />
  </div>
);
