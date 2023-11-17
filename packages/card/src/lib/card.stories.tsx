import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './card';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Basic = (args: CardProps) => {
  return (
    <>
      <div className="grid grid-cols-3">
        <Card
          cardTitle="Daily Visits"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, distinctio necessitatibus deserunt debitis doloremque molestias consequuntur eos, quasi nobis impedit et illo eveniet natus ipsam excepturi, cupiditate a ipsum minus.
        </Card>
      </div>
    </>
  )
}