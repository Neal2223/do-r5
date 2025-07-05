import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { rptos } from '@/data/rptos';

import { RptoCard } from './RptoCard';

const firstRpto = rptos[0];

if (!firstRpto) {
  throw new Error('No RPTOs found in data file for test.');
}

describe('RptoCard', () => {
  it('should render the RPTO name and city', () => {
    render(<RptoCard rpto={firstRpto} />);

    expect(
      screen.getByRole('heading', { name: firstRpto.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(firstRpto.city)).toBeInTheDocument();
  });

  it('should have a link pointing to the correct RPTO detail page', () => {
    render(<RptoCard rpto={firstRpto} />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', `/rpto/${firstRpto.id}`);
  });

  it('should render the logo image with correct alt text', () => {
    render(<RptoCard rpto={firstRpto} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('alt', `${firstRpto.name} logo`);
    expect(image).toHaveAttribute('src');
  });
});
