import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { rptos } from '@/data/rptos';

import { CourseCard } from './CourseCard';

const firstCourse = rptos[0]?.courses[0];

if (!firstCourse) {
  throw new Error('No courses found in data file for test.');
}

describe('CourseCard', () => {
  it('should render the course name, duration, and description', () => {
    render(<CourseCard course={firstCourse} />);

    expect(
      screen.getByRole('heading', { name: firstCourse.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Duration: ${firstCourse.duration}`),
    ).toBeInTheDocument();
    expect(screen.getByText(firstCourse.description)).toBeInTheDocument();
  });
});
