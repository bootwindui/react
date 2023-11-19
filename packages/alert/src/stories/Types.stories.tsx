import React from 'react';
import { Meta } from '@storybook/react';

import Title from '@bootwind/title';
import Alert from '../index';

export default {
  title: 'Components/Alert/Types',
  component: Alert,
  argTypes: {},
} as Meta;

export const WithTitle = () => (
  <>

    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />

    <div className="mb-5">
      <Alert
        type="info"
        title="With Title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />
    </div>

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

export const WithoutTitle = () => (
  <>
    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />

    <div className="mb-5">
      <Alert
        type="success"
        description="Order success"
      />
    </div>
    <div className="mb-5">
      <Alert
        type="danger"
        description="Failed placing your order"
      />
    </div>
    <div className="mb-5">
      <Alert
        type="info"
        description="Hello World!"
      />
    </div>
    <div className="mb-5">
      <Alert
        type="warning"
        description="You have 2 assignments to do"
      />
    </div>
  </>
);
export const DismissLink = () => (
  <>
    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />

    <div className="mb-5">
      <Alert
        type="success"
        dismissButton
        description="Order success"
      />
    </div>
    <div className="mb-5">
      <Alert
        type="danger"
        dismissButton
        description="Failed placing your order"
      />
    </div>
    <div className="mb-5">
      <Alert
        type="info"
        dismissButton
        description="Hello World!"
      />
    </div>
    <div className="mb-5">
      <Alert
        type="warning"
        dismissButton
        description="You have 2 assignments to do"
      />
    </div>
  </>
);

export const WithIcon = () => (
  <>
    <Title
      title="Alerts"
      description="The Alerts component in the Bootwind Design System enables you to convey important messages or notifications to users with clarity and style. Customize the alert's appearance, type, and content to effectively communicate information, warnings, or updates, ensuring a seamless and informative user experience in your interface."
    />

    <div className="mb-5">
      <Alert
        icon={true}
        description="A new software update is available. See what’s new in version 2.0.4."
        type="info"
        title="Information"
      />
    </div>
    <div className="mb-5">
      <Alert
        icon={true}
        type="warning"
        description="You have 2 uncompleted assignment"
      />
    </div>
    <div className="mb-5">
      <Alert
        icon={true}
        type="success"
        description="Order success!"
      />
    </div>
    <div className="mb-5">
      <Alert
        icon={true}
        type="danger"
        description="Invalid credentials"
      />
    </div>
  </>
);
