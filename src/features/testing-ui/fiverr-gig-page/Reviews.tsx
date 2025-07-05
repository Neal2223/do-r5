import { Star } from 'lucide-react';
import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Reviews = () => {
  const reviewData = {
    total: 78,
    average: 4.8,
    breakdown: [
      { stars: 5, count: 65, percentage: 83 },
      { stars: 4, count: 10, percentage: 13 },
      { stars: 3, count: 3, percentage: 4 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    ratings: [
      { name: 'Drone operation safety', score: 4.9 },
      { name: 'Data accuracy & quality', score: 4.8 },
      { name: 'Timeliness of delivery', score: 4.7 },
    ],
  };

  const individualReviews = [
    {
      user: 'DroneTech_Client',
      country: 'India',
      rating: 5,
      date: '3 weeks ago',
      comment: 'The aerial mapping service was exceptional! The data provided was highly accurate and delivered promptly. Great communication throughout the project. Highly recommended for any drone surveying needs.',
      price: '₹25,000 - ₹50,000',
      duration: '7 days',
      response: 'Seller\'s Response: Thank you for your kind words! It was a pleasure assisting with your mapping project.',
    },
    {
      user: 'AgriDrone_User',
      country: 'Australia',
      rating: 4,
      date: '1 month ago',
      comment: 'Good service for crop health analysis. The drone captured detailed multispectral images, which helped identify problem areas in our fields. Some minor delays in reporting, but overall satisfied.',
      price: '₹18,000 - ₹35,000',
      duration: '10 days',
      response: null,
    },
    {
      user: 'InfraInspect_Co',
      country: 'Germany',
      rating: 5,
      date: '2 months ago',
      comment: 'Outstanding infrastructure inspection. The thermal imaging identified critical issues that would have been impossible to spot otherwise. Professional and efficient service.',
      price: '₹40,000 - ₹80,000',
      duration: '14 days',
      response: 'Seller\'s Response: Glad we could help identify those critical points! Your satisfaction is our priority.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">
          {reviewData.total}
          {' '}
          reviews for this Gig
        </h3>
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(5)].map((_, i) => <Star key={`overall-star-${i}`} fill={i < Math.round(reviewData.average) ? 'currentColor' : 'none'} stroke="currentColor" className="size-5" />)}
          <span className="font-bold text-foreground">{reviewData.average}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          {reviewData.breakdown.map(b => (
            <div key={b.stars} className="flex items-center space-x-2">
              <span className="w-16">
                {b.stars}
                {' '}
                Stars
              </span>
              <div className="h-2.5 w-full rounded-full bg-muted">
                <div className="h-2.5 rounded-full bg-yellow-400" style={{ width: `${b.percentage}%` }}></div>
              </div>
              <span className="w-8 text-right text-muted-foreground">
                (
                {b.count}
                )
              </span>
            </div>
          ))}
        </div>
        <div>
          <h4 className="mb-2 font-bold">Rating Breakdown</h4>
          {reviewData.ratings.map(r => (
            <div key={r.name} className="flex items-center justify-between">
              <span>{r.name}</span>
              <div className="flex items-center space-x-1">
                <Star className="size-4 text-yellow-500" fill="currentColor" />
                <span>{r.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      {individualReviews.map(review => (
        <Card key={`${review.user}-${review.date}`} className="border-none shadow-none">
          <CardContent className="space-y-4 p-0">
            <div className="flex items-center space-x-3">
              <Avatar><AvatarFallback>{review.user.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
              <div>
                <p className="font-bold">{review.user}</p>
                <p className="text-sm text-muted-foreground">{review.country}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-0.5 text-yellow-500">
                {[...Array(5)].map((_, j) => <Star key={`review-star-${j}`} fill={j < review.rating ? 'currentColor' : 'none'} stroke="currentColor" className="size-4" />)}
              </div>
              <span className="font-bold text-yellow-500">{review.rating}</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            <p className="leading-relaxed text-foreground">{review.comment}</p>
            {review.response && (
              <Accordion type="single" collapsible>
                <AccordionItem value="response" className="border-b-0">
                  <AccordionTrigger className="justify-start space-x-2 p-0 text-primary hover:no-underline">
                    <span className="font-semibold">Seller's Response</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 text-muted-foreground">
                    {review.response.replace('Seller\'s Response: ', '')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            <Separator />
          </CardContent>
        </Card>
      ))}
      <Button variant="outline">Show More Reviews</Button>
    </div>
  );
};

export default Reviews;
