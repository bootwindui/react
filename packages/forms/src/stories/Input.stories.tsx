import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HiOutlineQuestionMarkCircle, HiOutlineCreditCard } from 'react-icons/hi2';

import Title from '@bootwind/title';
import { Text } from '@bootwind/typography';
import { Input, InputProps, type ToggleProps } from '../index';

export default {
  title: 'Components/Forms/Input',
  tags: ['autodocs'],
  component: Input,
  args: {
    rightSection: <HiOutlineCreditCard></HiOutlineCreditCard>,
    placeholder:'ari@bootwind.com',
    label:'Email',
    description: (
      <>
        <HiOutlineQuestionMarkCircle className='w-4 h-4' />
        Helping text for user
      </>
    )
  },
  argTypes: {
    id: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    type: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    name: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    variant: {
      type: 'string',
      options: ["default", "error", "warning", "success"],
      defaultValue: 'default',
      control: {
        type: 'select'
      }
    },
    label: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    placeholder: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    description: {
      control: {
        mapping: {
          empty: [],
        } 
      }
    },
    leftSection: {
      control: {
        mapping: {
          empty: [],
        } 
      }
    },
    rightSection: {
      control: {
        mapping: {
          empty: [],
        } 
      }
    },
  },
} as Meta;
type Story = StoryObj<InputProps>;

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
export const BasicInput: Story = {
  args: {
    placeholder: 'ari@bootwind.com',
    variant: 'default',
    rightSection: null,
  }
}
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'ari@bootwind.com',
    variant: 'default'
  }
}
export const WithDescription: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'ari@bootwind.com',
    variant: 'default',
    description: (
        <>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>
    )
  }
}
export const LeftRightSection: Story = {
  args: {
    label: 'Card Number',
    placeholder: '1234 1234 1234 1234',
    variant: 'default',
    leftSection: masterCardImage,
    rightSection: <HiOutlineCreditCard></HiOutlineCreditCard>
  }
}



export const Variants = (args: ToggleProps) => (
  <>

    <Title
      title="Forms"
      description="Forms"
    />

    <div className="mb-10">
      <Text type='paragraph' size={2}>Default</Text>
      <Input variant='default'  {...args}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Error</Text>
      <Input variant='error' {...args}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Warning</Text>
      <Input variant='warning' {...args}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Success</Text>
      <Input variant='success' {...args}></Input>
    </div>
  </>
)