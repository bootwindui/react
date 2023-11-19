import React from 'react';
import { Meta } from '@storybook/react';

import Title from '@bootwind/title';
import { Breadcrumbs, BreadcrumbItem } from '../index';
import { GoHome, GoComment, GoBook, GoFileDirectory } from 'react-icons/go';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
} as Meta;

export const TextAndIcon = () => (
  <>
    <Title
      title="Breadcrumbs"
      description="The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience."
    />

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
  </>
);

export const OnlyText = () => (
  <>
    <Title
      title="Breadcrumbs"
      description="The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience."
    />

    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/button" isActive>
        Button
      </BreadcrumbItem>
    </Breadcrumbs>
  </>
);

export const OnlyIcon = () => (
  <>

    <Title
      title="Breadcrumbs"
      description="The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience."
    />

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
  </>
);
