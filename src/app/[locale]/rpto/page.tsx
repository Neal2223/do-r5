'use client';

import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';

import { rptos } from '@/data/rptos';
import { RptoFilter } from '@/features/rpto/components/RptoFilter';
import { RptoList } from '@/features/rpto/components/RptoList';

export default function RptoDirectoryPage() {
  const [filters, setFilters] = useState({ search: '', city: 'all' });
  const t = useTranslations('RPTO');

  const filteredRptos = useMemo(() => {
    let filtered = rptos;

    if (filters.search) {
      filtered = filtered.filter(rpto =>
        rpto.name.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    if (filters.city !== 'all') {
      filtered = filtered.filter(rpto => rpto.city === filters.city);
    }

    return filtered;
  }, [filters]);

  const uniqueCities = useMemo(() => {
    const cities = rptos.map(rpto => rpto.city);
    return Array.from(new Set(cities)).sort();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">{t('directory_title')}</h1>
        <p className="text-lg text-gray-600">
          {t('directory_description')}
        </p>
      </div>

      <div className="my-8">
        <RptoFilter cities={uniqueCities} onFilterChange={setFilters} />
        <RptoList
          rptos={filteredRptos}
          noRptosFoundTitle={t('no_rptos_found_title')}
          noRptosFoundDescription={t('no_rptos_found_description')}
        />
      </div>
    </div>
  );
}
