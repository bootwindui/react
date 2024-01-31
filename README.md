<h1 align="center">Welcome to Bootwind UI Repository! 👋🏻</h1>

![bootwind-banner](https://github.com/syauqi/interpolasi/assets/46257169/de6fbbe1-00cc-49e7-8851-70dca26e7efe)

<p></p>

<h4 align="center">Bootwind UI: Tailwind CSS integration for rapid UI development. Streamline your projects with utility-first design and predefined components. ⚡️</a>
</h4>

<p></p>

<p align="center">
	<img src="https://img.shields.io/github/issues/bootwindproject/bootwindui?style=flat-round">
	<img src="https://img.shields.io/github/stars/bootwindproject/bootwindui?style=flat-round"> 
	<img src="https://img.shields.io/github/forks/bootwindproject/bootwindui?style=flat-round">
	<img src="https://img.shields.io/github/license/bootwindproject/bootwindui?style=flat-round">
	<img src="https://img.shields.io/badge/maintained%3F-yes-green.svg?style=flat-round">
	<img src="https://img.shields.io/github/followers/bootwindproject.svg?style=flat-round&label=followers">
</p>

<p align="center">
  <a href="https://github.com/bootwindproject/bootwindui">Github Repository</a> •
  <a href="https://bootwindproject.github.io/bootwindui/">Storybook</a> •
  <a href="#">Getting Started</a> •
  <a href="#">Contribution</a> •
  <a href="#">License</a>
</p>


<hr />

<p></p>

<h3>Overview</h3>
<div>

Welcome to Bootwind UI, where innovation meets simplicity in the realm of user interface development. Bootwind UI is a dynamic UI library designed to revolutionize your approach to building modern, responsive, and visually appealing interfaces. Whether you are a seasoned developer seeking efficiency or a newcomer looking for a powerful yet straightforward solution, Bootwind UI is your gateway to a world of possibilities.

Key Features:

- **Tailored for Speed and Efficiency**: Bootwind UI leverages the power of Tailwind CSS, offering developers a utility-first approach to styling. With a comprehensive set of utility classes, you can achieve a polished and professional look for your UI with minimal effort.
- **Responsive Design**: Craft responsive interfaces effortlessly. Bootwind UI ensures that your applications look and function flawlessly across a variety of devices and screen sizes, making it easy to create a consistent user experience.
- **Predefined Components**: Say goodbye to repetitive coding. Bootwind UI comes packed with a diverse range of pre-designed components, such as buttons, cards, modals, and navigation bars. These components can be easily customized to suit your project's unique requirements, allowing for rapid development without sacrificing creativity.
- **Customization Without Complexity**: Tailwind CSS is known for its customization capabilities, and Bootwind UI embraces this by providing a clean and organized structure for easy theming. Tailor the library to match your brand effortlessly, ensuring a cohesive and branded look for your application.
- **Lightweight and Performant**: Keep your application fast and efficient. Bootwind UI is designed to be lightweight, ensuring that your users enjoy a smooth and responsive experience without unnecessary bloat.

</div>

<p></p>

<hr />

<p></p>

<h3>Getting Started</h3>
<div>
Welcome to Bootwind UI – the ultimate toolkit for creating beautiful, responsive user interfaces with ease. Follow these steps to quickly integrate Bootwind UI into your project.
  
<p></p>
1. Bootwind UI should be installed as a `dependency` of your app.
<p></p>

```sh
yarn add @bootwindproject/bootwindui
```

<p></p>
2. Install deps
Bootwind UI components are styled using CSS in JS. This technique requires a style renderer which inserts CSS into DOM when needed. React context is used to provide the style renderer.
Place a `<BootwindProvider />` at the root of your app and pass theme as a prop.
<p></p>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BootwindProvider } from '@bootwindproject/bootwindui';

import App from './App';

ReactDOM.render(

<BootwindProvider>
  <App />
</BootwindProvider>
, document.getElementById('root') );
```

<p></p>
3. Usage
That's it. You can now use Bootwind UI components in your app.
<p></p>

```jsx
import React from 'react';
import { Button } from '@bootwindproject/bootwindui';

export default () => <Button color="primary">Get started</Button>;
```

</div>

<hr />

<p></p>

<h3>Contributions</h3>
<div>

Bootwind uses [nx](https://github.com/nrwl/nx) as monorepo build system. You can install it globally by running `pnpm i -g nx`

<p></p>
1. Clone the repository
<p></p>

```sh
git clone https://github.com/bootwindui/bootwind
cd bootwind
```

<p></p>
2. Install deps
<p></p>

```sh
pnpm install
```

<p></p>
3. Run storybook locally
<p></p>

```sh 
nx run ui:storybook
```
<p></p>
4. Create new component (e.g. card component). Change `card` to your desired component name
<p></p>

```sh
nx g @nrwl/react:lib card
```

<p></p>
5. Generate stories from component
<p></p>

```sh
nx g @nx/react:storybook-configuration card
```
<p></p>

</div>

<hr />

<p></p>

<h3>License</h3>

- Copyright © 2024 Bootwind Project
- BootwindUI is open sourced in under MIT license.
