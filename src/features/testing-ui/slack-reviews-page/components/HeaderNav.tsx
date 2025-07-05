import { ChevronDown, Search } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const HeaderNav = () => (
  <header className="w-full border-b border-border bg-background text-foreground">
    <div className="container mx-auto px-4">
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-red-600">G2</h1>
          <div className="hidden items-center overflow-hidden rounded border md:flex">
            <Search className="mx-2 size-5 text-muted-foreground" />
            <Input type="search" placeholder="Search for software, etc." className="w-96 border-none focus:ring-0" />
          </div>
        </div>
        <nav className="hidden items-center space-x-6 text-base font-medium lg:flex">
          <a href="/" className="transition-colors hover:text-primary">Software</a>
          <a href="/" className="transition-colors hover:text-primary">Services</a>
          <a href="/" className="transition-colors hover:text-primary">
            G2 for Business
            <ChevronDown className="inline size-4" />
          </a>
          <a href="/" className="transition-colors hover:text-primary">Deals</a>
          <Button className="bg-red-600 text-white hover:bg-red-700">Write a Review</Button>
        </nav>
      </div>
    </div>
  </header>
);
