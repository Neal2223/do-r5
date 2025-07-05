import type { Meta, StoryObj } from '@storybook/react';

import { rptos } from '@/data/rptos';

import { RptoList } from './RptoList';

const meta: Meta<typeof RptoList> = {
  title: 'Features/RPTO/RptoList',
  component: RptoList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RptoList>;

export const Default: Story = {
  args: {
    rptos,
  },
  render: args => (
    <div className="p-4">
      <RptoList {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    rptos: [],
  },
  render: args => (
    <div className="p-4">
      <RptoList {...args} />
    </div>
  ),
};
