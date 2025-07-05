import type { Meta, StoryObj } from '@storybook/react';

import FiverrGigPage from './FiverrGigPage';

const meta: Meta<typeof FiverrGigPage> = {
  title: 'Pages/FiverrGigPage',
  component: FiverrGigPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FiverrGigPage>;

export const Default: Story = {
  args: {},
};
