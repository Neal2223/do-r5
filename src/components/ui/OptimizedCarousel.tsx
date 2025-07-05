'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

type OptimizedCarouselProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => string | number;
  slidesToShow?: number;
  slidePadding?: number;
};

const OptimizedCarousel = <T extends object>({
  data,
  renderItem,
  getKey,
  slidesToShow = 3,
  slidePadding = 16,
}: OptimizedCarouselProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
    return () => {};
  }, [checkScrollability, data]);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (data.length <= slidesToShow) {
    return (
      <div className="flex" style={{ paddingLeft: `${slidePadding}px` }}>
        {data.map(item => renderItem(item))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
      >
        {data.map((item, index) => (
          <div
            key={getKey(item)}
            className="shrink-0 snap-start"
            style={{
              width: `calc(${100 / slidesToShow}% - ${slidePadding}px)`,
              marginLeft: index === 0 ? '0' : `${slidePadding}px`,
            }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="size-4" />
        </Button>
      )}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default OptimizedCarousel;
