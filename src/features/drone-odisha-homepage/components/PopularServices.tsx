'use client';

import Image from 'next/image';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import OptimizedCarousel from '@/components/ui/OptimizedCarousel';

const PopularServices = () => {
  const popularServices = [
    {
      title: 'Agri Spray',
      img: 'https://placehold.co/400x300/a78bfa/ffffff?text=Coding',
    },
    {
      title: 'Mapping',
      img: 'https://placehold.co/400x300/60a5fa/ffffff?text=Web+Dev',
    },
    {
      title: 'Inspection',
      img: 'https://placehold.co/400x300/f87171/ffffff?text=Editing',
    },
    {
      title: 'Delivery',
      img: 'https://placehold.co/400x300/facc15/ffffff?text=Software',
    },
    { title: 'Monitoring', img: 'https://placehold.co/400x300/4ade80/ffffff?text=SEO' },
    {
      title: 'Survey',
      img: 'https://placehold.co/400x300/fb923c/ffffff?text=Design',
    },
    {
      title: 'Filmmaking',
      img: 'https://placehold.co/400x300/2dd4bf/ffffff?text=Books',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-4xl font-bold">Popular Drone Services</h2>
      <OptimizedCarousel
        data={popularServices}
        getKey={service => service.title}
        renderItem={service => (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            </CardContent>
          </Card>
        )}
        slidesToShow={5}
        slidePadding={24}
      />
    </div>
  );
};

export default PopularServices;
