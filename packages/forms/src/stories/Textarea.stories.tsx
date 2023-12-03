import { Meta, StoryObj } from "@storybook/react";
import { Textarea, TextareaProps } from '../index'
export default {
    title: 'Components/Forms/Textarea',
    tags: ['autodocs'],
    component: Textarea,
    args: {
      placeholder:'Enter a description..',
      label:'Email'
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