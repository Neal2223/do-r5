import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import { rptos } from '@/data/rptos';

import { CourseCard } from './CourseCard';

const firstCourse = rptos[0]?.courses[0];

if (!firstCourse) {
  throw new Error('No courses found in data file for test.');
}

const mockMessages = {
  RPTO: {
    course_duration: 'Duration: ',
    course_description: 'Comprehensive training for drone piloting.',
  },
};

describe('CourseCard', () => {
  it('should render the course name, duration, and description', () => {
    render(
      <NextIntlClientProvider messages={mockMessages} locale="en">
        <CourseCard course={firstCourse} />
      </NextIntlClientProvider>,
    );

    expect(
      screen.getByRole('heading', { name: firstCourse.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Duration: ${firstCourse.duration}`),
    ).toBeInTheDocument();
    expect(screen.getByText(firstCourse.description)).toBeInTheDocument();
  });
});
