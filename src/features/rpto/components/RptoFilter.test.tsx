import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it, vi } from 'vitest';

import { RptoFilter } from './RptoFilter';

// Mock scrollIntoView as it's not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

const mockMessages = {
  RPTO: {
    filter_placeholder_search: 'Search by name...',
    filter_all_cities: 'All Cities',
  },
};

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en" messages={mockMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
};

describe('RptoFilter', () => {
  const cities = ['Bhubaneswar', 'Cuttack'];

  it('should call onFilterChange when search input changes', async () => {
    const user = userEvent.setup();
    const handleFilterChange = vi.fn();
    renderWithProvider(<RptoFilter cities={cities} onFilterChange={handleFilterChange} />);

    const searchInput = screen.getByPlaceholderText('Search by name...');
    await user.type(searchInput, 'test search');

    expect(handleFilterChange).toHaveBeenCalledWith({
      search: 'test search',
      city: 'all',
    });
  });

  it('should call onFilterChange when a city is selected', async () => {
    const user = userEvent.setup();
    const handleFilterChange = vi.fn();
    renderWithProvider(<RptoFilter cities={cities} onFilterChange={handleFilterChange} />);

    const selectTrigger = screen.getByRole('combobox');
    await user.click(selectTrigger);

    const cityOption = await screen.findByText('Cuttack');
    await user.click(cityOption);

    expect(handleFilterChange).toHaveBeenCalledWith({
      search: '',
      city: 'Cuttack',
    });
  });

  it('should render all provided cities as options', async () => {
    const user = userEvent.setup();
    const handleFilterChange = vi.fn();
    renderWithProvider(<RptoFilter cities={cities} onFilterChange={handleFilterChange} />);

    const selectTrigger = screen.getByRole('combobox');
    await user.click(selectTrigger);

    expect(await screen.findByRole('option', { name: 'All Cities' })).toBeInTheDocument();

    for (const city of cities) {
      expect(await screen.findByText(city)).toBeInTheDocument();
    }
  });
});
