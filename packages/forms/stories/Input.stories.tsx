import React from 'react';
import { Meta } from '@storybook/react';
import Toggle, { ToggleProps } from '../src/toggle';

import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import Text from '../../typography/src/text';
import Input from '../src/input';

export default {
  title: 'Components/Forms/Input',
  component: Toggle,
  argTypes: {
    enabled: { control: 'boolean' },
  },
} as Meta;

export const BasicInput = (args: ToggleProps) => (
    <>
        <Text type='headline' size={6}>Basic Input</Text>
        <Input placeholder='ari@bootwind.com'></Input>
        <Input placeholder='Disabled input' disabled></Input>
    </>
)
export const LabelAndHelperText = (args: ToggleProps) => (
    <>
    <div className="mb-10">
        <Text type='headline' size={6}>Input with Label</Text>
        <Input placeholder='ari@bootwind.com' label='Email'></Input>
    </div>
    <div className="mb-10">
        <Text type='headline' size={6}>Input with Description</Text>
        <Input placeholder='ari@bootwind.com' label='Email' description={
          <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4'/>
          Helping text for user
          </>
        }></Input>
    </div>
    </>
)
export const Variants = (args: ToggleProps) => (
    <>
    <div className="mb-10">
        <Text type='paragraph' size={2}>Default</Text>
        <Input placeholder='ari@bootwind.com' label='Email' description={
          <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4'/>
          Helping text for user
          </>
        }></Input>
    </div>
    <div className="mb-10">
        <Text type='paragraph' size={2}>Danger</Text>
        <Input variant='danger' placeholder='ari@bootwind.com' label='Email' description={
          <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4'/>
          Helping text for user
          </>
        }></Input>
    </div>
    <div className="mb-10">
        <Text type='paragraph' size={2}>Warning</Text>
        <Input variant='warning' placeholder='ari@bootwind.com' label='Email' description={
          <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4'/>
          Helping text for user
          </>
        }></Input>
    </div>
    <div className="mb-10">
        <Text type='paragraph' size={2}>Success</Text>
        <Input variant='success' placeholder='ari@bootwind.com' label='Email' description={
          <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4'/>
          Helping text for user
          </>
        }></Input>
    </div>
    </>
)
export const InputGroup = (args: ToggleProps) => (
    <>
    </>
)