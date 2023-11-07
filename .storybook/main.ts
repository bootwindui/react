import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx',"../packages/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  typescript: {
    check: false
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
