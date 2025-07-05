import { setRequestLocale } from 'next-intl/server';

import DroneOdishaHomepage from '@/features/drone-odisha-homepage/DroneOdishaHomepage';

export default async function DroneOdishaHomepagePage({ params }: { params: { locale: string } }) {
  await setRequestLocale(params.locale);
  return <DroneOdishaHomepage />;
}
