import React from 'react';

import Slider from '../lib/slider';

export default {
    title: '❖ • Components/Slider',
    component: Slider,
};

export const Basic = () => {
    return <Slider />;
}

export const WithIcons = () => {
    return (
        <Slider
            leftContent={<span className='text-sm'>🔊</span>}
            rightContent={<span className='text-sm'>🔉</span>}
        />
    );
};

export const CustomRange = () => {
    return (
        <Slider
            min={1}
            max={75}
            leftContent={<span className='text-black'>1</span>}
            rightContent={<span className='text-black'>75</span>}
        />
    );
};