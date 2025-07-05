import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { LocaleSwitcher } from './LocaleSwitcher';
import { AppConfig } from '@/utils/AppConfig';

vi.mock('next-intl', () => ({
  useLocale: () => 'en',
}));
vi.mock('@/libs/i18nNavigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
}));

// Mock Button and DropdownMenu primitives if needed for isolation

describe('LocaleSwitcher', () => {
  it('renders all locales from AppConfig', () => {
    render(<LocaleSwitcher />);
    AppConfig.locales.forEach(locale => {
      expect(screen.getByText(locale.name)).toBeInTheDocument();
    });
  });

  it('calls router.push and router.refresh on locale change', () => {
    const push = vi.fn();
    const refresh = vi.fn();
    vi.mocked(require('@/libs/i18nNavigation')).useRouter.mockReturnValue({ push, refresh });
    render(<LocaleSwitcher />);
    // Simulate click to open dropdown and select a locale
    fireEvent.click(screen.getByRole('button', { name: /lang-switcher/i }));
    fireEvent.click(screen.getByText(AppConfig.locales[1].name));
    expect(push).toHaveBeenCalled();
    expect(refresh).toHaveBeenCalled();
  });
});
