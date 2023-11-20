import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from '@bootwind/title';
import { Breadcrumbs, BreadcrumbItem, BreadcrumbsProps } from '../index';
import { GoHome, GoComment, GoBook, GoFileDirectory, GoFile } from 'react-icons/go';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: "Breadcrumb items to render",
      control: {
        type: 'array'
      }
    }
  }
} as Meta;
type Story = StoryObj<BreadcrumbsProps>;


export const TextAndIcon: Story = {
  args: {
    items: [
      { icon: <GoHome />, href: '/docs', children: 'Home'},
      { icon: <GoBook />, href: '/docs/components', children: 'Docs'},
      { icon: <GoComment />, href: '/docs/components', children: 'Components'},
      { icon: <GoFileDirectory />, href: '/docs/components/button', isActive: true, children: 'Button'},
    ]
  }
}

export const OnlyText: Story = {
  args: {
    items: [
      { href: '/docs', children: 'Home'},
      { href: '/docs/components', children: 'Docs'},
      { href: '/docs/components', children: 'Components'},
      { href: '/docs/components/button', isActive: true, children: 'Button'},
    ]
  }
}


export const OnlyIcons: Story = {
  args: {
    items: [
      { icon: <GoHome />, href: '/docs' },
      { icon: <GoBook />, href: '/docs/components' },
      { icon: <GoComment />, href: '/docs/components' },
      { icon: <GoFileDirectory />, href: '/docs/components/button', isActive: true },
    ]
  }
}
