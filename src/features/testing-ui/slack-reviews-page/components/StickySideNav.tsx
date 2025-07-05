import React from 'react';

import { Separator } from '@/components/ui/separator';

export const StickySideNav = () => (
  <div className="sticky top-10 space-y-1 text-base font-medium">
    <a href="/" className="flex items-center rounded-md bg-red-100 p-3 font-bold text-red-700">Product Information</a>
    <a href="/" className="flex items-center rounded-md p-3 hover:bg-muted">Reviews</a>
    <a href="/" className="flex items-center rounded-md p-3 hover:bg-muted">Pricing</a>
    <a href="/" className="flex items-center rounded-md p-3 hover:bg-muted">Features</a>
    <a href="/" className="flex items-center rounded-md p-3 hover:bg-muted">Implementation</a>
    <Separator className="my-2" />
    <a href="/" className="flex items-center rounded-md p-3 font-bold text-primary hover:bg-muted">Write a Review</a>
  </div>
);
