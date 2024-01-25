import '../src/scss/main.scss';
import type { Preview } from '@storybook/react';
import BootwindTheme from './BootwindTheme';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Welcome',
          '❖ • Core',
          [
            'Typography',
            'Colors',
            'Gradients',
            'Shadows',
            'Blur',
            'Backdrop Blur',
            'Grid System',
            'Container',
            'Spacing',
          ],
          '❖ • Components',
          [
            'Button',
            'Checkbox',
            'Toggle',
            'Slider',
            'Tooltip',
            'Input',
            'Textarea',
          ],
          '❖ • UI Components',
          [
            'Avatar',
            'Tabs',
            'Card',
            'Modal',
            'Breadcrumbs',
            'Toast',
            'Alert',
            'Badge',
            'Table',
          ],
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    enableShortcuts: false,
    backgrounds: {
      default: 'bootwind',
      values: [
        {
          name: 'bootwind',
          value: '#F3F4F6',
        },
        {
          name: 'purple-bootwind',
          value: '#6666FF',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      disabled: true,
      expanded: true,
    },
    docs: {
      theme: BootwindTheme,
    },
  },
};

export default preview;
