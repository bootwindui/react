import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps } from '../lib/tooltip';
import { Button } from "@bootwind/button"
import { TooltipTrigger } from '../lib/tooltip-trigger';
import { TooltipContent } from '../lib/tooltip-content';

export default {
    title: '❖ • Components/Tooltip',
    tags: ['autodocs'],
    component: Tooltip,
    argTypes: {
        position: {
            control: 'select', options: ['top', 'bottom', 'left', 'right'],
        },
        variant: {
            control: 'radio', options: ['dark', 'light'],
        },
    },
} as Meta;

const Template: Story<TooltipProps> = (args) => (
    <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>
);

export const Top = Template.bind({});
Top.args = {
    position: "top",
    content: 'Top tooltip content',
    variant: 'dark'
};

export const Bottom = Template.bind({});
Bottom.args = {
    position: "bottom",
    content: 'Bottom tooltip content',
    variant: 'dark'
};

export const Left = Template.bind({});
Left.args = {
    position: 'left',
    content: 'Left Tooltip Text',
    variant: 'dark'
};

export const Right = Template.bind({});
Right.args = {
    position: 'right',
    content: 'Right Tooltip Text',
    variant: 'dark'
};

export const Light = Template.bind({});
Light.args = {
    position: 'right',
    content: 'Light Tooltip',
};

export const Dark = Template.bind({});
Dark.args = {
    position: 'right',
    content: 'Dark Tooltip',
    variant: 'dark'
};