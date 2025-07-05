import type { Rpto } from '@/data/rptos';
import { cn } from '@/utils/cn';

import { RptoCard } from './RptoCard';

type RptoListProps = {
  rptos: Rpto[];
  className?: string;
  noRptosFoundTitle: string;
  noRptosFoundDescription: string;
};

export function RptoList({
  rptos,
  className,
  noRptosFoundTitle,
  noRptosFoundDescription,
}: RptoListProps) {
  if (rptos.length === 0) {
    return (
      <div className="flex h-48 flex-col items-center justify-center rounded-md border border-dashed bg-muted/50">
        <h3 className="text-lg font-semibold">{noRptosFoundTitle}</h3>
        <p className="text-sm text-muted-foreground">
          {noRptosFoundDescription}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className,
      )}
    >
      {rptos.map(rpto => (
        <RptoCard key={rpto.id} rpto={rpto} />
      ))}
    </div>
  );
}
