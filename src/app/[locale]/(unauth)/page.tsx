import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import DroneOdishaHomepage from '@/features/drone-odisha-homepage/DroneOdishaHomepage';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'DroneOdishaHomepage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Homepage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return <DroneOdishaHomepage />;
};

export default Homepage;
