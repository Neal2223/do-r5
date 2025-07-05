import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { rptos } from '@/data/rptos';
import { CourseCard } from '@/features/rpto/components/CourseCard';
import { RequestInfoForm } from '@/features/rpto/components/RequestInfoForm';

// This function can be used by Next.js to generate static pages at build time
export function generateStaticParams() {
  return rptos.map(rpto => ({ id: rpto.id }));
}

type RptoDetailPageProps = {
  params: { id: string };
};

export default function RptoDetailPage({ params }: RptoDetailPageProps) {
  const rpto = rptos.find(r => r.id === params.id);
  const t = useTranslations('RPTO');

  if (!rpto) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column: Logo and Basic Info */}
        <div className="md:col-span-1">
          <div className="relative mb-4 size-48 overflow-hidden rounded-lg border">
            <Image
              src={rpto.logoUrl}
              alt={`${rpto.name} logo`}
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{rpto.name}</h1>
          <p className="text-base text-muted-foreground">{rpto.address}</p>
          <Link
            href={rpto.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
          >
            {t('detail_visit_website')}
            {' '}
            <ExternalLink className="ml-1 size-4" />
          </Link>
        </div>

        {/* Right Column: Description, Courses, and Form */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">
                {t('detail_about', { rptoName: rpto.name })}
              </h2>
              <p className="mt-2 text-muted-foreground">{rpto.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">{t('detail_courses_offered')}</h2>
              <div className="mt-4 space-y-4">
                {rpto.courses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            <div>
              <RequestInfoForm rptoEmail={rpto.contactEmail} rptoName={rpto.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
