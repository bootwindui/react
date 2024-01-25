import { addons } from '@storybook/manager-api';
import BootwindTheme from './BootwindTheme';

addons.setConfig({
  theme: BootwindTheme,
  showPanel: false,
});
