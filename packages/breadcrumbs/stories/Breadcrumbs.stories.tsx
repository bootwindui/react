import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumbs, BreadcrumbItem } from '../src/index';
import { GoHome, GoComment, GoBook, GoFileDirectory } from 'react-icons/go';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
} as Meta;

export const TextAndIcon = () => (
  <Breadcrumbs>
    <BreadcrumbItem icon={<GoHome />} href="/">
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/docs" icon={<GoBook />}>
      Docs
    </BreadcrumbItem>
    <BreadcrumbItem href="/docs/components" icon={<GoComment />}>
      Components
    </BreadcrumbItem>
    <BreadcrumbItem
      href="/docs/components/button"
      icon={<GoFileDirectory />}
      isActive
    >
      Button
    </BreadcrumbItem>
  </Breadcrumbs>
);

export const OnlyText = () => (
  <Breadcrumbs>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
    <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
    <BreadcrumbItem href="/docs/components/button" isActive>
      Button
    </BreadcrumbItem>
  </Breadcrumbs>
);

export const OnlyIcon = () => (
  <Breadcrumbs>
    <BreadcrumbItem href="/" icon={<GoHome />}></BreadcrumbItem>
    <BreadcrumbItem href="/docs" icon={<GoBook />}></BreadcrumbItem>
    <BreadcrumbItem
      href="/docs/components"
      icon={<GoComment />}
    ></BreadcrumbItem>
    <BreadcrumbItem
      href="/docs/components/button"
      icon={<GoFileDirectory />}
      isActive
    ></BreadcrumbItem>
  </Breadcrumbs>
);
