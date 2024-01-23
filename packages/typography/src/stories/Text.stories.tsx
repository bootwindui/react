import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from '@bootwind/title';
import { TextProps, Text } from '../';

export default {
  title: '❖ • Core/Typography',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Hello World!',
    size: 1,
    type: 'headline',
    weight: 'font-light',
  },
  argTypes: {
    type: {
      description: "Size of the text",
      control: {
        type: 'select'
      },
      options: [
        'short-desc',
        'paragraph',
        'headline',
        'display',
      ],
      name: "Size"
    },
    children: {
      name: "Content",
      control: {
        type: 'text',
      }
    },
    size: {
      name: "Size",
      control: {
        type: 'number'
      }
    },
    weight: {
      name: "Font Weight",
      control: {
        type: 'select'
      },
      options: [
        "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black"
      ]
    },
    color: {
      name: "Color",
      description: "Using Tailwind colors",
      control: {
        type: 'text'
      },
    },
  },
} as Meta;

type Story = StoryObj<TextProps>;

export const Basic: Story = {
  args: {
    children: "A brown fox jumps over the lazy dog",
    size: 3,
    weight: 'font-black',
    italic: false,
  }
}

export const TypeParagraph = (args: TextProps) => (
  <div>
    {[...Array(6)].map((_, i) => (
      <div className='mb-12'>
        <Text type='paragraph' size={i + 1} weight='font-bold'>Paragraph: {i + 1} / Bold</Text>
        <Text type='paragraph' size={i + 1} weight='font-semibold'>Paragraph: {i + 1} / SemiBold</Text>
        <Text type='paragraph' size={i + 1} weight='font-medium'>Paragraph: {i + 1} / Medium</Text>
        <Text type='paragraph' size={i + 1} weight='font-normal'>Paragraph: {i + 1} / Normal</Text>
      </div>
    ))}
  </div>
)
export const TypeShortDesc = (args: TextProps) => (
  <div>
    {[...Array(4)].map((_, i) => (
      <div className='mb-12'>
        <Text type='short-desc' size={i + 1} weight='font-bold'>Short Desc: {i + 1} / Bold</Text>
        <Text type='short-desc' size={i + 1} weight='font-semibold'>Short Desc: {i + 1} / SemiBold</Text>
        <Text type='short-desc' size={i + 1} weight='font-medium'>Short Desc: {i + 1} / Medium</Text>
        <Text type='short-desc' size={i + 1} weight='font-normal'>Short Desc: {i + 1} / Normal</Text>
      </div>
    ))}
  </div>
)
export const TypeHeadline = (args: TextProps) => (
  <div>
    {[...Array(6)].map((_, i) => (
      <div className='mb-12'>
        <Text type='headline' size={i + 1} weight='font-bold'>Headline: {i + 1} / Bold</Text>
        <Text type='headline' size={i + 1} weight='font-semibold'>Headline: {i + 1} / SemiBold</Text>
        <Text type='headline' size={i + 1} weight='font-medium'>Headline: {i + 1} / Medium</Text>
        <Text type='headline' size={i + 1} weight='font-normal'>Headline: {i + 1} / Normal</Text>
      </div>
    ))}
  </div>
)
export const TypeDisplay = (args: TextProps) => (
  <div>
    {[...Array(3)].map((_, i) => (
      <div className='mb-24'>
        <Text type='display' size={i + 1} weight='font-bold' >Display:{i + 1} / Bold</Text>
        <Text type='display' size={i + 1} weight='font-semibold' >Display: {i + 1} / Semibold</Text>
        <Text type='display' size={i + 1} weight='font-medium' >Display: {i + 1} / Medium</Text>
      </div>
    ))}
  </div>
)