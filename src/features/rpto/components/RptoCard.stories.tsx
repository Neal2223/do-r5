import type { Meta, StoryObj } from '@storybook/react';

import { rptos } from '@/data/rptos';

import { RptoCard } from './RptoCard';

const meta: Meta<typeof RptoCard> = {
  title: 'Features/RPTO/RptoCard',
  component: RptoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RptoCard>;

const firstRpto = rptos[0];

if (!firstRpto) {
  throw new Error('No RPTOs found in data file for Storybook story.');
}

export const Default: Story = {
  args: {
    rpto: firstRpto,
  },
  render: args => (
    <div className="w-80">
      <RptoCard {...args} />
    </div>
  ),
};
