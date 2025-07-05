import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { rptos } from '@/data/rptos';

import { RptoList } from './RptoList';

describe('RptoList', () => {
  it('should render a card for each RPTO in the list', () => {
    render(<RptoList rptos={rptos} />);

    const cards = screen.getAllByRole('link');

    expect(cards).toHaveLength(rptos.length);

    rptos.forEach((rpto) => {
      expect(
        screen.getByRole('heading', { name: rpto.name }),
      ).toBeInTheDocument();
    });
  });

  it('should render an empty state message when no RPTOs are provided', () => {
    render(<RptoList rptos={[]} />);

    expect(screen.getByRole('heading', { name: 'No RPTOs Found' })).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your search or filter criteria.')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
