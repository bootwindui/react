import React from 'react';
import { Meta } from '@storybook/react';

import { Avatar, AvatarProps } from '../index';
import Title from '@bootwind/title';

export default {
  title: 'Components/Avatar',
  component: Avatar,
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
      control: 'boolean',
    },
  },
} as Meta;

export const Avatars = (args: AvatarProps) => (
  <>
    <Title
      title="Avatars"
      description="The Avatars component in the Bootwind Design System lets you personalize user profiles and identities with ease and style. Customize the avatar's size, shape, and appearance to create unique and visually appealing representations, enhancing the user experience and adding a touch of personality to your application or website."
    />

    <div className="flex space-x-4 px-8">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        {...args}
        alt="User 1"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        {...args}
        alt="User 2"
      />
      <Avatar showPlaceholder={true} {...args} alt="User 2" />
    </div>
  </>
);
