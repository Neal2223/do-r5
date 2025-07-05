import { promises as fs } from 'node:fs';
import path from 'node:path';

import { unstable_setRequestLocale } from 'next-intl/server';

import CompanyLayout from '@/features/dummy-pages/components/CompanyLayout';
import LegalLayout from '@/features/dummy-pages/components/LegalLayout';
import ResourceLayout from '@/features/dummy-pages/components/ResourceLayout';
import ServiceLayout from '@/features/dummy-pages/components/ServiceLayout';

type ContentBlock = {
  type: 'paragraph' | 'heading';
  text: string;
};

type PageData = {
  slug: string;
  title: string;
  category: string;
  content: {
    hero: { title: string; subtitle: string };
    main: ContentBlock[];
  };
};

async function getPageData(): Promise<PageData[]> {
  const jsonPath = path.join(process.cwd(), 'src', 'features', 'dummy-pages', 'data', 'pages.json');
  const fileContents = await fs.readFile(jsonPath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.pages;
}

export async function generateStaticParams() {
  const pages = await getPageData();
  return pages.map(page => ({ slug: page.slug }));
}

const DummyPage = async (props: { params: { slug: string; locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  const pages = await getPageData();
  const page = pages.find(p => p.slug === props.params.slug);

  if (!page) {
    return <div>Page not found</div>;
  }

  const { title, category, content } = page;
  const { hero, main: mainContent } = content;

  switch (category) {
    case 'Company':
      return <CompanyLayout title={title} hero={hero} mainContent={mainContent} />;
    case 'Legal':
      return <LegalLayout title={title} hero={hero} mainContent={mainContent} />;
    case 'Resource':
      return <ResourceLayout title={title} hero={hero} mainContent={mainContent} />;
    case 'Service':
    case 'Enterprise':
    case 'Pilots':
      return <ServiceLayout title={title} hero={hero} mainContent={mainContent} />;
    default:
      return <div>Unknown page category</div>;
  }
};

export default DummyPage;
