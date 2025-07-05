'use client';

import * as Select from '@radix-ui/react-select';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

type RptoFilterProps = {
  cities: string[];
  onFilterChange: (filters: { search: string; city: string }) => void;
  className?: string;
};

export function RptoFilter({ cities, onFilterChange, className }: RptoFilterProps) {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('all');

  useEffect(() => {
    onFilterChange({ search, city });
  }, [search, city, onFilterChange]);

  return (
    <div className={cn('flex flex-col gap-4 md:flex-row', className)}>
      <div className="relative grow">
        <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="h-10 w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <Select.Root value={city} onValueChange={setCity}>
        <Select.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 md:w-56">
          <Select.Value placeholder="Filter by city" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md">
            <Select.Viewport className="p-1">
              <Select.Item value="all" className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground">
                <Select.ItemText>All Cities</Select.ItemText>
                <Select.ItemIndicator className="absolute left-2 flex size-3.5 items-center justify-center">✓</Select.ItemIndicator>
              </Select.Item>
              {cities.map(c => (
                <Select.Item key={c} value={c} className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground">
                  <Select.ItemText>{c}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2 flex size-3.5 items-center justify-center">✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
