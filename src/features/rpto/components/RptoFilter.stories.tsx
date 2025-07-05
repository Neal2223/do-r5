import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { RptoFilter } from './RptoFilter';

const meta: Meta<typeof RptoFilter> = {
  title: 'Features/RPTO/RptoFilter',
  component: RptoFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onFilterChange: action('onFilterChange'),
  },
};

export default meta;
type Story = StoryObj<typeof RptoFilter>;

export const Default: Story = {
  args: {
    cities: ['Bhubaneswar', 'Cuttack', 'Rourkela'],
  },
  render: args => (
    <div className="w-[600px] p-4">
      <RptoFilter {...args} />
    </div>
  ),
};

export const NoCities: Story = {
  args: {
    cities: [],
  },
  render: args => (
    <div className="w-[600px] p-4">
      <RptoFilter {...args} />
    </div>
  ),
};
