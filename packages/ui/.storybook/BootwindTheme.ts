import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: `
    <div style="display: flex; gap: 4px; align-items: center;">
        <img src="https://res.cloudinary.com/dmww1p65r/image/upload/v1706181221/gxlbop2zywgiyzbujh7c.png"></img>
        <span style="font-weight:bold;"> Bootwind UI</span>
    </div>
  `,
});
