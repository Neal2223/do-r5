import { ChevronRight } from 'lucide-react';
import React from 'react';

import { cn } from '@/libs/utils';

type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  items: { label: string; href?: string }[];
};

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      className={cn(
        'flex items-center space-x-2 text-sm text-muted-foreground',
        className,
      )}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <ChevronRight className="size-4" />}
          {item.href
            ? (
                <a className="text-primary hover:underline" href={item.href}>
                  {item.label}
                </a>
              )
            : (
                <span>{item.label}</span>
              )}
        </React.Fragment>
      ))}
    </nav>
  ),
);
Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };
