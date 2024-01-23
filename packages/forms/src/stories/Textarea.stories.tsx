import { Meta, StoryObj } from "@storybook/react";
import { Textarea, TextareaProps } from '../index'
export default {
  title: '❖ • Components/Textarea',
  tags: ['autodocs'],
  component: Textarea,
  args: {
    placeholder: 'Enter a description..',
    label: 'Email'
  },
} as Meta;
type Story = StoryObj<TextareaProps>;

export const Basic: Story = {
}
export const Error: Story = {
  args: {
    variant: "error"
  }
}
export const Disabled: Story = {
  args: {
    variant: "error",
    disabled: true
  }
}
export const Filled: Story = {
  args: {
    filled: true
  }
}