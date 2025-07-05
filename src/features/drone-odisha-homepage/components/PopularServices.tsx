'use client';

import Image from 'next/image';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import OptimizedCarousel from '@/components/ui/OptimizedCarousel';

const PopularServices = () => {
  const imagePaths = [
    '/popular services/UI Banner Dark Art Style.jpeg',
    '/popular services/freepik__a-graphic-vector-art-style-ui-banner-with-a-dark-h__16203.png',
    '/popular services/freepik__a-graphic-vector-art-style-ui-banner-with-a-dark-h__16204.png',
    '/popular services/freepik__a-graphic-vector-art-style-ui-banner-with-a-dark-h__16205.png',
    '/popular services/freepik__a-graphic-vector-art-style-ui-banner-with-a-dark-h__16206.png',
  ];

  const getRandomImage = (): string => {
    if (imagePaths.length === 0) {
      // Fallback or error handling if no images are available
      return '/placeholder.png'; // Or throw an error
    }
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex]!;
  };

  const popularServices = [
    {
      title: 'Agri Spray',
      img: getRandomImage(),
    },
    {
      title: 'Mapping',
      img: getRandomImage(),
    },
    {
      title: 'Inspection',
      img: getRandomImage(),
    },
    {
      title: 'Delivery',
      img: getRandomImage(),
    },
    { title: 'Monitoring', img: getRandomImage() },
    {
      title: 'Survey',
      img: getRandomImage(),
    },
    {
      title: 'Filmmaking',
      img: getRandomImage(),
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
            <CardContent className="relative h-40 p-0">
              <Image
                src={service.img}
                alt={service.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
