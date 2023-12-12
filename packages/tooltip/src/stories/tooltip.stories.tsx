import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip, { TooltipProps } from '../lib/tooltip';
import { Button } from "@bootwind/button"
import { TooltipTrigger } from '../lib/tooltip-trigger';
import { TooltipContent } from '../lib/tooltip-content';

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
    content: 'Tooltip Text',
    variant: 'dark'
};

export const Bottom = Template.bind({});
Bottom.args = {
    position: "bottom",
    content: 'This is a custom tooltip content',
    variant: 'dark'
};

export const Left = Template.bind({});
Left.args = {
    position: 'left',
    content: 'Tooltip Text',
    variant: 'dark'
};

export const Right = Template.bind({});
Right.args = {
    position: 'right',
    content: 'Tooltip Text',
    variant: 'dark'
};

export const Light = Template.bind({});
Light.args = {
    position: 'bottom',
    content: 'Light Tooltip',
};

export const Dark = Template.bind({});
Dark.args = {
    position: 'bottom',
    content: 'Dark Tooltip',
    variant: 'dark'
};