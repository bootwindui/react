import React from 'react';
import { Meta } from '@storybook/react';

import Title from '@bootwind/title';
import { CheckboxProps, Checkbox } from '../index';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    isRounded: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} as Meta;

export const Variants = (args: CheckboxProps) => (
  <>
    <Title
      title="Checkbox"
      description="The Checkbox component in the Bootwind Design System allows users to make selections from a set of options or toggle a single option on or off. With customizable options for labels, sizes, types, statuses, and states, you can create versatile checkboxes that fit your design needs."
    />
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

export const IndeterminateState = (args: CheckboxProps) => (
  <>
    <Title
      title="Checkbox"
      description="The Checkbox component in the Bootwind Design System allows users to make selections from a set of options or toggle a single option on or off. With customizable options for labels, sizes, types, statuses, and states, you can create versatile checkboxes that fit your design needs."
    />
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
  </>
);
