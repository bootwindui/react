import React from 'react';
import { Meta } from '@storybook/react';
import Alert from '../src/index';

export default {
  title: 'Components/Alert/Types',
  component: Alert,
  argTypes: {},
} as Meta;

export const WithTitle = () => (
  <>
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
