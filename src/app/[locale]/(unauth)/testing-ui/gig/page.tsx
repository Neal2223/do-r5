import { unstable_setRequestLocale } from 'next-intl/server';

import FiverrGigPage from '@/features/testing-ui/FiverrGigPage';

export default function GigPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <FiverrGigPage />;
}
