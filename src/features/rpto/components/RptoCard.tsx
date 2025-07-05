import Image from 'next/image';
import Link from 'next/link';

import type { Rpto } from '@/data/rptos';
import { cn } from '@/utils/cn';

type RptoCardProps = {
  rpto: Rpto;
  className?: string;
};

export function RptoCard({ rpto, className }: RptoCardProps) {
  return (
    <Link
      href={`/rpto/${rpto.id}`}
      className={cn(
        'block overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg',
        className,
      )}
    >
      <div className="relative h-48 w-full">
        <Image
          src={rpto.logoUrl}
          alt={`${rpto.name} logo`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold tracking-tight">{rpto.name}</h3>
        <p className="text-sm text-muted-foreground">{rpto.city}</p>
      </div>
    </Link>
  );
}
