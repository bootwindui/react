import React from 'react';
import { Story, Meta } from '@storybook/react';

import Title from '../../title/src/index';
import Badge, { BadgeProps } from '../src/index';
import { FaRegEnvelope } from 'react-icons/fa6'; // Import ikon dari react-icons atau dari sumber lain

export default {
  title: 'Components/Badge',
  component: Badge,
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
  },
} as Meta;

const Template: Story<BadgeProps> = args => <>
  <Title
    title="Badge"
    description="The Badge component in the Bootwind Design System is a versatile element that allows you to highlight and label content effectively. Customize the badge's appearance, size, and color to draw attention to specific information, notifications, or status indicators, enhancing the overall clarity and engagement of your interface."
  />
  <Badge {...args}> Badge </Badge></>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  withDot: true,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  withIcon: <span>🚨</span>,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'primary',
  withIcon: <span>🌟</span>,
};

export const WithDotAndIcon = Template.bind({});
WithDotAndIcon.args = {
  variant: 'warning',
  withDot: true,
  withIcon: <span>🔔</span>,
};
export const AllBadges = () => (
  <>
    <Badge variant="warning" withIcon={<FaRegEnvelope />}>
      Warning
    </Badge>
    <Badge variant="primary" withIcon={<FaRegEnvelope />}>
      Primary
    </Badge>
    <Badge variant="error" withIcon={<FaRegEnvelope />}>
      Danger
    </Badge>
    <Badge variant="neutral" withIcon={<FaRegEnvelope />}>
      Neutral
    </Badge>
    <Badge variant="success" withIcon={<FaRegEnvelope />}>
      Success
    </Badge>
  </>
);
