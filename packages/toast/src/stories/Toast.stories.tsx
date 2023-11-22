import { Toast, ToastProps } from "..";
import { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToastContext } from "../lib/ToastProvider";
import { Button } from "@bootwind/button"
import { useToast } from "../lib/useToast";
import { useEffect } from "react";
import { AlertProps } from "@bootwind/alert";

export default {
    tags: ['autodocs'],
    title: 'Components/Toast',
    component: Toast,
    decorators: [
      (Story: any) => (
        <ToastProvider>
          <div className="min-h-screen">
            <Story />
          </div>
        </ToastProvider>
      )
    ],
    args: {
      title: "Hi There!",
      description: 'Welcome back, User!',
      dismissButton: false,
    },
    argTypes: {
      description: {
        description: 'The title text',
        type: "string",
        control: {
          type: 'text'
        }
      },
      dismissButton: {
        description: 'Whether to show dismiss button',
        type: "boolean",
        control: {
          type: 'boolean',
        }
      },
      link: {
        description: 'Add link to the alert',
        type: "string",
        control: {
          type: 'object',
        }
      },
      icon: {
        description: 'Alert icon',
        type: "boolean",
        control: {
          type: 'boolean',
        }
      },
      variant: {
        description: 'The color type of the alert',
        type: "string",
        options: ['warning', 'error', 'success', 'info'],
        control: {
          type: 'select',
        }
      },
      border: {
        description: 'Whether to add border on the alert',
        type: "string",
        options: ["left", "right", "all", "none"],
        defaultValue: "none",
        control: {
          type: 'select',
        }
      },
    },
  } as Meta;
type Story = StoryObj<ToastProps>;

const randomVariants = () => {
  return ['success', 'error', 'info', 'warning'][Math.floor(Math.random() * 4)]
}

export const Basic = (args: ToastProps) => {
  const { toasts, add } = useToastContext()
  const showToast = () => {
    add({
      variant: randomVariants() as AlertProps['variant'],
      title: "Order success",
      description: "Thank you for order!"
    })
  }
  return (
    <>
      <Button onClick={showToast}>Click me</Button>
    </>
  )
}