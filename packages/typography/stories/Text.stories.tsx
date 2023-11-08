import { Meta } from '@storybook/react';
import Text, { TextProps } from '../src/text';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    
  },
} as Meta;

export const Sizes = (args: TextProps) => (
  <div>

  {[...Array(6)].map((_, i) => (
      <div className='mb-12'>
        <Text type='paragraph' size={i+1} weight='font-bold'>Paragraph: {i+1} / Bold</Text>
        <Text type='paragraph' size={i+1} weight='font-semibold'>Paragraph: {i+1} / SemiBold</Text>
        <Text type='paragraph' size={i+1} weight='font-medium'>Paragraph: {i+1} / Medium</Text>
        <Text type='paragraph' size={i+1} weight='font-normal'>Paragraph: {i+1} / Normal</Text>
      </div>
    ))} 
    {[...Array(4)].map((_, i) => (
      <div className='mb-12'>
        <Text type='short-desc' size={i+1} weight='font-bold'>Short Desc: {i+1} / Bold</Text>
        <Text type='short-desc' size={i+1} weight='font-semibold'>Short Desc: {i+1} / SemiBold</Text>
        <Text type='short-desc' size={i+1} weight='font-medium'>Short Desc: {i+1} / Medium</Text>
        <Text type='short-desc' size={i+1} weight='font-normal'>Short Desc: {i+1} / Normal</Text>
      </div>
    ))}
    {[...Array(6)].map((_, i) => (
      <div className='mb-12'>
        <Text type='headline' size={i+1} weight='font-bold'>Headline: {i+1} / Bold</Text>
        <Text type='headline' size={i+1} weight='font-semibold'>Headline: {i+1} / SemiBold</Text>
        <Text type='headline' size={i+1} weight='font-medium'>Headline: {i+1} / Medium</Text>
        <Text type='headline' size={i+1} weight='font-normal'>Headline: {i+1} / Normal</Text>
      </div>
    ))}
    {[...Array(3)].map((_, i) => (
      <div className='mb-24'>
        <Text type='display' size={i+1} weight='font-bold' >Display: i+1 / Bold</Text>
        <Text type='display' size={i+1} weight='font-semibold' >Display: i+1 / Semibold</Text>
        <Text type='display' size={i+1} weight='font-medium' >Display: i+1 / Medium</Text>
      </div>
    ))}
  </div>
);
