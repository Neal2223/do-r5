import React from 'react';

import { Button } from '@/components/ui/button';

const AboutGig = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold">About this Gig</h3>
    <p className="text-muted-foreground">
      Looking for innovative solutions for aerial data collection, inspection, or surveying? I offer comprehensive drone services tailored to your needs. From high-resolution mapping to detailed infrastructure inspections, I provide actionable insights to help you achieve your objectives.
    </p>
    <Button variant="link" className="h-auto p-0">Read More</Button>
  </div>
);

export default AboutGig;
