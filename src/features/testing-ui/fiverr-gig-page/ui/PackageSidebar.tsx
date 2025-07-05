import { Check, ChevronRight } from 'lucide-react';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { dronePackages } from '../data/packages';

const PackageSidebar = () => (
  <div className="sticky top-10">
    <Tabs defaultValue={dronePackages[0]!.id} className="w-full rounded-md border">
      <TabsList className="grid w-full grid-cols-3">
        {dronePackages.map(pkg => (
          <TabsTrigger key={pkg.id} value={pkg.id}>
            {pkg.id.charAt(0).toUpperCase() + pkg.id.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      {dronePackages.map(pkg => (
        <TabsContent key={pkg.id} value={pkg.id} className="space-y-4 p-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold">{pkg.name}</h3>
            <p className="text-2xl font-bold">{pkg.price}</p>
          </div>
          <p className="text-muted-foreground">{pkg.description}</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Check className="size-5 text-green-500" />
              <span>{pkg.deliveryTime}</span>
            </li>
            {pkg.features.map(feature => (
              <li key={feature.text} className="flex items-center space-x-2">
                <Check className="size-5 text-green-500" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full bg-black py-6 text-lg text-white hover:bg-gray-800">
            Continue
            {' '}
            <ChevronRight className="ml-2 size-5" />
          </Button>
          <Button variant="outline" className="w-full">Contact me</Button>
        </TabsContent>
      ))}
    </Tabs>
    <div className="mt-6">
      <h4 className="mb-2 font-bold">Related tags</h4>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">notion dashboard</Badge>
        <Badge variant="secondary">asana</Badge>
        <Badge variant="secondary">project management</Badge>
        <Badge variant="secondary">notion expert</Badge>
        <Badge variant="secondary">notion tutor</Badge>
      </div>
    </div>
  </div>
);

export default PackageSidebar;
