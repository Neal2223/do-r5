'use client';

import { useMemo, useState } from 'react';

import { rptos } from '@/data/rptos';
import { RptoFilter } from '@/features/rpto/components/RptoFilter';
import { RptoList } from '@/features/rpto/components/RptoList';

// Helper to get unique cities from the data
const getUniqueCities = () => {
  const cities = rptos.map(rpto => rpto.city);
  return [...new Set(cities)];
};

export default function RptoDirectoryPage() {
  const [filters, setFilters] = useState({ search: '', city: 'all' });

  const uniqueCities = useMemo(() => getUniqueCities(), []);

  const filteredRptos = useMemo(() => {
    return rptos.filter((rpto) => {
      const searchMatch = rpto.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const cityMatch = filters.city === 'all' || rpto.city === filters.city;
      return searchMatch && cityMatch;
    });
  }, [filters]);

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          RPTO Directory
        </h1>
        <p className="text-lg text-muted-foreground">
          Find certified Remote Pilot Training Organizations in Odisha.
        </p>
      </div>

      <div className="my-8">
        <RptoFilter cities={uniqueCities} onFilterChange={setFilters} />
      </div>

      <RptoList rptos={filteredRptos} />
    </div>
  );
}
