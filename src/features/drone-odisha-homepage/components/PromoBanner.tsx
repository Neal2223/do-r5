import React from 'react';

import { Button } from '@/components/ui/button';

const PromoBanner = () => (
  <div className="container mx-auto my-10 flex items-center justify-between rounded-lg bg-pink-600 p-12 text-white">
    <div>
      <h3 className="mb-2 text-4xl font-bold">Need a custom drone solution?</h3>
      <p className="text-lg">Get matched with the right expert to turn your project into a reality.</p>
    </div>
    <Button variant="secondary" className="rounded-md bg-white px-8 py-6 text-lg font-bold text-pink-600 hover:bg-gray-200">
      Find an Expert
    </Button>
  </div>
);

export default PromoBanner;
