import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import { rptos } from '@/data/rptos';

import { RptoList } from './RptoList';

const mockMessages = {
  RPTO: {
    list_empty_heading: 'No RPTOs Found',
    list_empty_description: 'Try adjusting your search or filter criteria.',
  },
};

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en" messages={mockMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
};

describe('RptoList', () => {
  it('should render a card for each RPTO in the list', () => {
    renderWithProvider(
      <RptoList
        rptos={rptos}
        noRptosFoundTitle={mockMessages.RPTO.list_empty_heading}
        noRptosFoundDescription={mockMessages.RPTO.list_empty_description}
      />,
    );

    const cards = screen.getAllByRole('link');

    expect(cards).toHaveLength(rptos.length);

    rptos.forEach((rpto) => {
      expect(
        screen.getByRole('heading', { name: rpto.name }),
      ).toBeInTheDocument();
    });
  });

  it('should render an empty state message when no RPTOs are provided', () => {
    renderWithProvider(
      <RptoList
        rptos={[]}
        noRptosFoundTitle={mockMessages.RPTO.list_empty_heading}
        noRptosFoundDescription={mockMessages.RPTO.list_empty_description}
      />,
    );

    expect(screen.getByRole('heading', { name: mockMessages.RPTO.list_empty_heading })).toBeInTheDocument();
    expect(
      screen.getByText(mockMessages.RPTO.list_empty_description),
    ).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
