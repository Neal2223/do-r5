import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import { RequestInfoForm } from './RequestInfoForm';

const meta: Meta<typeof RequestInfoForm> = {
  title: 'Features/RPTO/RequestInfoForm',
  component: RequestInfoForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    rptoEmail: 'test@example.com',
    rptoName: 'Test RPTO',
  },
};

export default meta;
type Story = StoryObj<typeof RequestInfoForm>;

export const Default: Story = {
  render: args => (
    <div className="w-[500px]">
      <RequestInfoForm {...args} />
    </div>
  ),
};

export const WithValidationErrors: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Mock window.location.href to prevent navigation
    const mockLocation = { href: '' };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: mockLocation,
    });

    const submitButton = canvas.getByRole('button', { name: /send inquiry/i });

    // Attempt to submit the empty form to trigger validation
    await userEvent.click(submitButton);
  },
};
