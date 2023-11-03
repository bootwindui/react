import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '../src/components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isRounded: { control: 'boolean' },
    indeterminate: { control: 'boolean' }, // Tambahkan control untuk prop indeterminate
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
