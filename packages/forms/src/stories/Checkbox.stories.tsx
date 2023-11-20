import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from '@bootwind/title';
import { CheckboxProps, Checkbox } from '../index';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    isRounded: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} as Meta;
type Story = StoryObj<CheckboxProps>;

export const Basic: Story = {
  args: {
    id: 'myRandomCheckboxId',
    isRounded: true,
    label: 'Basic Checkbox',
    indeterminate: false
  }
};
export const Variants = (args: CheckboxProps) => (
  <>
    <div className="flex flex-col space-y-4">
      <div>
        <Checkbox
          id="roundedCheckbox"
          label="Rounded Checkbox"
          isRounded={true}
        />
      </div>
      <div>
        <Checkbox id="squareCheckbox" label="Square Checkbox" isRounded={false} />
      </div>
    </div>
  </>
);

export const IndeterminateState: Story = {
  args: {
    label: 'Basic Checkbox',
    indeterminate: true
  }
};