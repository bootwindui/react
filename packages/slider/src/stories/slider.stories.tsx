import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Slider, SliderProps } from '../lib/slider';

export default {
    title: '❖ • Components/Slider',
    tags: ['autodocs'],
    component: Slider,
    argTypes: {
        leftContent: { control: 'text', description: 'Your left content, can be text, emoji or icon' },
        rightContent: { control: 'text', description: 'Your right content, can be text, emoji or icon' },
        className: { control: 'text', description: 'String' },
    },
} as Meta;
type Story = StoryObj<SliderProps>;

export const Basic: Story = {
    args: {
        min: 0,
        max: 10,
    }
}

export const WithEmojiOrIcon: Story = {
    args: {
        min: 0,
        max: 100,
        leftContent: (<span>🔉</span>),
        rightContent: (<span>🔊</span>)
    }
}

export const WithNumber: Story = {
    args: {
        min: 0,
        max: 100,
        leftContent: (<span className='text-black'>0</span>),
        rightContent: (<span className='text-black'>100</span>)
    }
}
