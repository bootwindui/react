import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip, { TooltipProps } from '../lib/tooltip';
import { Button } from "@bootwind/button"

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        position: {
            control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
        },
    },
} as Meta;

const Template: Story<TooltipProps> = (args) => (
    <Tooltip {...args}>
        <Button>Hover me to see the tooltip</Button>
    </Tooltip>
);

export const Top = Template.bind({});
Top.args = {
    position: 'top',
    content: 'Tooltip Text',
};

export const Bottom = Template.bind({});
Bottom.args = {
    position: 'bottom',
    content: 'This is a custom tooltip content',
    variant: 'light'
};

export const Left = Template.bind({});
Left.args = {
    position: 'left',
    content: 'Tooltip Text',
};

export const Right = Template.bind({});
Right.args = {
    position: 'right',
    content: 'Tooltip Text',
};

export const Light = Template.bind({});
Light.args = {
    position: 'bottom',
    content: 'Light Tooltip',
    variant: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
    position: 'bottom',
    content: 'Dark Tooltip',
    variant: 'dark'
};