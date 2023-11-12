import React from 'react';
import { Meta } from '@storybook/react';
import Toggle, { ToggleProps } from '../src/toggle';

import { FaMoon, FaSun } from 'react-icons/fa6';
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
export const InputGroup = (args: ToggleProps) => (
    <>
    </>
)