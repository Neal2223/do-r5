import { ChevronRight, Star } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import AboutGig from './AboutGig';
import ComparePackages from './ComparePackages';
import FAQ from './FAQ';
import MyPortfolio from './MyPortfolio';
import RecommendedForYou from './RecommendedForYou';
import Reviews from './Reviews';

const GigDetails = () => (
  <div className="space-y-10">
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <span>Drone Services</span>
      <ChevronRight className="size-4" />
      <span>Aerial Photography & Videography</span>
      <ChevronRight className="size-4" />
      <span>Drone Operations Management</span>
    </div>
    <h1 className="text-4xl font-bold leading-tight text-foreground">
      I will provide professional drone services for aerial data collection and analysis
    </h1>
    <div className="flex items-center space-x-4">
      <Avatar className="size-16">
        <AvatarImage src="https://placehold.co/100x100/5eead4/111827?text=DRONE" alt="Drone Pilot" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-bold">Drone Pilot</h2>
          <Badge variant="secondary">Level 2</Badge>
        </div>
        <div className="flex items-center space-x-1 text-yellow-500">
          <Star fill="currentColor" className="size-5" />
          <span className="font-bold text-foreground">4.9</span>
          <span className="text-muted-foreground">(155)</span>
        </div>
      </div>
      <Button variant="outline">Contact me</Button>
    </div>
    <Separator />
    <div>
      <p className="mb-4 text-lg text-foreground">Elevate your perspective.</p>
      <p className="text-muted-foreground">I provide comprehensive drone services, from aerial data collection to advanced analytics, helping businesses gain valuable insights and optimize operations.</p>
    </div>
    <div className="flex space-x-2">
      <Badge variant="outline">Mapping</Badge>
      <Badge variant="outline">Inspection</Badge>
      <Badge variant="outline">Surveying</Badge>
    </div>
    <Separator />
    <AboutGig />
    <MyPortfolio />
    <ComparePackages />
    <RecommendedForYou />
    <FAQ />
    <Reviews />
  </div>
);

export default GigDetails;
