import React from 'react';
import { Meta } from '@storybook/react';

import Title from '../../title/src/index';
import Text, { TextProps } from '../src/text';

export default {
  title: 'Components/Typography/Text',
  component: Text,
  args: {
    children: 'Hello World!',
    size: 1,
    type: 'headline',
    weight: 'font-light'
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

export const Sizes = (args: TextProps) => (
  <div>

    <Title
      title="Typography"
      description="Typography in the Bootwind Design System plays a pivotal role in shaping the visual identity and readability of your content. Customize font styles, sizes, line spacing, and color schemes to create a harmonious and engaging typographic hierarchy. Whether you're designing for web, print, or any other medium, Typography ensures that your text elements are not only aesthetically pleasing but also convey information effectively, enhancing the overall readability and user experience of your design."
    />

    <Text type={args.type} color={args.color} size={args.size} weight={args.weight}>{args.children}</Text>

    {[...Array(6)].map((_, i) => (
      <div className='mb-12'>
        <Text type='paragraph' size={i + 1} weight='font-bold'>Paragraph: {i + 1} / Bold</Text>
        <Text type='paragraph' size={i + 1} weight='font-semibold'>Paragraph: {i + 1} / SemiBold</Text>
        <Text type='paragraph' size={i + 1} weight='font-medium'>Paragraph: {i + 1} / Medium</Text>
        <Text type='paragraph' size={i + 1} weight='font-normal'>Paragraph: {i + 1} / Normal</Text>
      </div>
    ))}
    {[...Array(4)].map((_, i) => (
      <div className='mb-12'>
        <Text type='short-desc' size={i + 1} weight='font-bold'>Short Desc: {i + 1} / Bold</Text>
        <Text type='short-desc' size={i + 1} weight='font-semibold'>Short Desc: {i + 1} / SemiBold</Text>
        <Text type='short-desc' size={i + 1} weight='font-medium'>Short Desc: {i + 1} / Medium</Text>
        <Text type='short-desc' size={i + 1} weight='font-normal'>Short Desc: {i + 1} / Normal</Text>
      </div>
    ))}
    {[...Array(6)].map((_, i) => (
      <div className='mb-12'>
        <Text type='headline' size={i + 1} weight='font-bold'>Headline: {i + 1} / Bold</Text>
        <Text type='headline' size={i + 1} weight='font-semibold'>Headline: {i + 1} / SemiBold</Text>
        <Text type='headline' size={i + 1} weight='font-medium'>Headline: {i + 1} / Medium</Text>
        <Text type='headline' size={i + 1} weight='font-normal'>Headline: {i + 1} / Normal</Text>
      </div>
    ))}
    {[...Array(3)].map((_, i) => (
      <div className='mb-24'>
        <Text type='display' size={i + 1} weight='font-bold' >Display: i+1 / Bold</Text>
        <Text type='display' size={i + 1} weight='font-semibold' >Display: i+1 / Semibold</Text>
        <Text type='display' size={i + 1} weight='font-medium' >Display: i+1 / Medium</Text>
      </div>
    ))}
  </div>
);
