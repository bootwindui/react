import type { Meta, StoryObj } from '@storybook/react';
import Title from '@bootwind/title';
import { Card, CardProps } from './card';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    options: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    children: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
  }
};
export default meta;
type Story = StoryObj<CardProps>;

export const Basic: Story = {
  args: {
    title: "Basic Card",
    children: "The Foundation Cards component in the Bootwind Design System offers a versatile way to structure and present content in a visually appealing manner. Customize card styles, sizes, and content to effectively highlight and organize information within your interface. Whether you're showcasing products, articles, or user profiles, the Foundation Cards component enhances the presentation and user engagement with your content, providing a cohesive and aesthetic design foundation for your application or website."
  }
}