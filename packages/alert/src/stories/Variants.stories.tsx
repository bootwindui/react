import React from 'react';
import { Meta } from '@storybook/react';

import Title from '@bootwind/title';
import Alert from '..';

export default {
  title: 'Components/Alert/Variants',
  component: Alert,
  argTypes: {},
} as Meta;

export const Warning = () => (
  <>

    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />

    <Alert
      type="warning"
      title="Attention needed"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
    />

  </>
);

export const Error = () => (
  <>
    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />


    <Alert
      type="danger"
      title="There were 2 errors with your submission"
      description={
        <ul role="list" className="list-disc space-y-1 pl-5">
          <li>Your password must be at least 8 characters</li>
          <li>
            Your password must include at least one pro wrestling finishing move
          </li>
        </ul>
      }
    />
  </>
);

export const Success = () => (
  <>

    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />


    <Alert
      type="success"
      title="Order completed"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      actions={
        <div className="-mx-2 -my-1.5 flex">
          <button
            type="button"
            className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
          >
            View status
          </button>
          <button
            type="button"
            className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
          >
            Dismiss
          </button>
        </div>
      }
    />
  </>
);

export const Info = () => (
  <>

    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />


    <Alert
      type="info"
      title="A new software update is available. See what’s new in version 2.0.4."
      link={{ url: '#', text: 'Details' }}
    />
  </>
);

export const WarningWithLink = () => (
  <>

    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />


    <Alert
      type="warning"
      title="You have no credits left."
      description={
        <>
          You have no credits left.{' '}
          <a
            href="#"
            className="font-medium text-yellow-700 underline hover:text-yellow-600"
          >
            Upgrade your account to add more credits.
          </a>
        </>
      }
    />
  </>
);

export const SuccessWithDismissButton = () => (
  <>
    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />

    <Alert type="success" title="Successfully uploaded" dismissButton />
  </>
);
