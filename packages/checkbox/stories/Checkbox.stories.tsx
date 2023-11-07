import React from 'react';
import { Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../src/index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isRounded: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} as Meta;

export const Variants = (args: CheckboxProps) => (
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
);

export const IndeterminateState = (args: CheckboxProps) => (
  <div className="flex flex-col space-y-4">
    <div>
      <Checkbox
        isRounded={false}
        id="indeterminateCheckbox"
        label="Indeterminate Checkbox"
        indeterminate={true}
      />
    </div>
  </div>
);
