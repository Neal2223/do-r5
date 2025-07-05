import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { AppConfig } from '@/utils/AppConfig';

import { LocaleSwitcher } from './LocaleSwitcher';

vi.mock('next-intl', () => ({
  useLocale: () => 'en',
}));
const mockPush = vi.fn();
const mockRefresh = vi.fn();

vi.mock('@/libs/i18nNavigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: mockRefresh,
  }),
  usePathname: () => '/',
}));

// Mock Button and DropdownMenu primitives if needed for isolation

describe('LocaleSwitcher', () => {
  it('renders all locales from AppConfig', async () => {
    render(<LocaleSwitcher />);
    await userEvent.click(screen.getByRole('button', { name: /lang-switcher/i }));
    await waitFor(() => expect(screen.getByRole('menuitemradio', { name: 'English' })).toBeInTheDocument());
    for (const locale of AppConfig.locales) {
      expect(await screen.findByRole('menuitemradio', { name: locale.name })).toBeInTheDocument();
    }
  });

  it('calls router.push and router.refresh on locale change', async () => {
    render(<LocaleSwitcher />);
    // Simulate click to open dropdown and select a locale
    await userEvent.click(screen.getByRole('button', { name: /lang-switcher/i }));
    await userEvent.click(await screen.findByRole('menuitemradio', { name: 'Français' }));

    expect(mockPush).toHaveBeenCalled();
    expect(mockRefresh).toHaveBeenCalled();
  });
});
