import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const RecommendedForYou = () => {
  const recommendations = [
    { img: 'https://placehold.co/300x200/e0e7ff/4338ca?text=Drone+Mapping', user: 'SkyView Drones', title: 'I will provide high-resolution drone mapping services', price: 'From ₹25,000', rating: '4.7 (144)' },
    { img: 'https://placehold.co/300x200/fecdd3/881337?text=Drone+Inspection', user: 'AeroInspect', title: 'I will conduct detailed drone inspections for infrastructure', price: 'From ₹35,000', rating: '5.0 (5)' },
  ];
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Recommended for you</h3>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {recommendations.map((rec, i) => (

            <Card key={i} className="min-w-[300px]">
              <CardContent className="p-0">
                <Image src={rec.img} alt={rec.title} width={300} height={200} className="rounded-t-lg" />
                <div className="space-y-2 p-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="size-8"><AvatarFallback>{rec.user.charAt(0)}</AvatarFallback></Avatar>
                    <span className="font-semibold">{rec.user}</span>
                  </div>
                  <p className="cursor-pointer font-medium hover:text-primary">{rec.title}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="size-4 text-yellow-500" fill="currentColor" />
                    <span className="font-bold text-yellow-500">{rec.rating.split(' ')[0]}</span>
                    <span className="text-muted-foreground">{rec.rating.split(' ')[1]}</span>
                  </div>
                  <p className="font-bold">{rec.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" size="icon" className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"><ChevronRight className="size-6" /></Button>
      </div>
    </div>
  );
};

export default RecommendedForYou;
