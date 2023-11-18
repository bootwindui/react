import React from 'react';
import { Meta } from '@storybook/react';

import { HiOutlineQuestionMarkCircle, HiOutlineCreditCard } from 'react-icons/hi2';

import Title from '../../title/src/index';
import Toggle, { ToggleProps } from '../src/toggle';
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

    <Title
      title="Forms"
      description="Forms"
    />

    <Text type='headline' size={6}>Basic Input</Text>
    <Input placeholder='ari@bootwind.com'></Input>
    <Input placeholder='Disabled input' disabled></Input>
  </>
)
export const LabelAndHelperText = (args: ToggleProps) => (
  <>

    <Title
      title="Forms"
      description="Forms"
    />

    <div className="mb-10">
      <Text type='headline' size={6}>Input with Label</Text>
      <Input placeholder='ari@bootwind.com' label='Email'></Input>
    </div>
    <div className="mb-10">
      <Text type='headline' size={6}>Input with Description</Text>
      <Input placeholder='ari@bootwind.com' label='Email' description={
        <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>
      }></Input>
    </div>
  </>
)
const masterCardImage = (
  <>
    <div className="p-1 border rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65265 10.0245C8.64273 10.8562 7.33269 11.3583 5.90117 11.3583C2.70702 11.3583 0.117645 8.85857 0.117645 5.77498C0.117645 2.69139 2.70702 0.19165 5.90117 0.19165C7.33269 0.19165 8.64273 0.693732 9.65265 1.52544C10.6626 0.693732 11.9726 0.19165 13.4041 0.19165C16.5983 0.19165 19.1877 2.69139 19.1877 5.77498C19.1877 8.85857 16.5983 11.3583 13.4041 11.3583C11.9726 11.3583 10.6626 10.8562 9.65265 10.0245Z" fill="#ED0006" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65265 10.0245C10.8962 9.00045 11.6847 7.47661 11.6847 5.77498C11.6847 4.07335 10.8962 2.54952 9.65265 1.52543C10.6626 0.693731 11.9726 0.19165 13.4041 0.19165C16.5983 0.19165 19.1877 2.69139 19.1877 5.77498C19.1877 8.85857 16.5983 11.3583 13.4041 11.3583C11.9726 11.3583 10.6626 10.8562 9.65265 10.0245Z" fill="#F9A000" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65266 10.0245C10.8962 9.00043 11.6847 7.4766 11.6847 5.77498C11.6847 4.07336 10.8962 2.54954 9.65266 1.52545C8.40914 2.54954 7.62064 4.07336 7.62064 5.77498C7.62064 7.4766 8.40914 9.00043 9.65266 10.0245Z" fill="#FF5E00" />
      </svg>
    </div>
  </>
)
export const LeftRightSections = (args: ToggleProps) => (
  <>

    <Title
      title="Forms"
      description="Forms"
    />

    <div className="mb-10">
      <Input placeholder='1234 1234 1234 1234'
        label='Card Number'
        leftSection={masterCardImage}
      />
    </div>
    <div className="mb-10">
      <Input placeholder='1234 1234 1234 1234'
        label='Card Number'
        leftSection={masterCardImage}
        rightSection={<>
          <HiOutlineCreditCard></HiOutlineCreditCard>
        </>}
      />
    </div>
  </>
)
export const Variants = (args: ToggleProps) => (
  <>

    <Title
      title="Forms"
      description="Forms"
    />

    <div className="mb-10">
      <Text type='paragraph' size={2}>Default</Text>
      <Input placeholder='ari@bootwind.com' label='Email' description={
        <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>
      }></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Danger</Text>
      <Input variant='danger' placeholder='ari@bootwind.com' label='Email' description={
        <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>
      }></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Warning</Text>
      <Input variant='warning' placeholder='ari@bootwind.com' label='Email' description={
        <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>
      }></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Success</Text>
      <Input variant='success' placeholder='ari@bootwind.com' label='Email' description={
        <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
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