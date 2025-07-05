import type { Meta, StoryObj } from '@storybook/react';

import { rptos } from '@/data/rptos';

import { CourseCard } from './CourseCard';

const meta: Meta<typeof CourseCard> = {
  title: 'Features/RPTO/CourseCard',
  component: CourseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CourseCard>;

const firstCourse = rptos[0]?.courses[0];

if (!firstCourse) {
  throw new Error('No courses found in data file for Storybook story.');
}

export const Default: Story = {
  args: {
    course: firstCourse,
  },
  render: args => (
    <div className="w-96">
      <CourseCard {...args} />
    </div>
  ),
};
