import { ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => (
  <div
    className="relative bg-gray-900 px-4 py-20 text-white"
    style={{
      backgroundImage:
        'url("https://placehold.co/1920x1080/111827/ffffff?text=Drone+Odisha")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60" />
    <div className="container relative mx-auto">
      <header className="mb-16 flex items-center justify-between">
        <Image src="/logo.svg" alt="Drone Odisha Logo" width={180} height={40} />
        <nav className="hidden items-center space-x-6 md:flex">
          <a href="/" className="hover:underline">
            Drone Odisha Pro
          </a>
          <a href="/" className="hover:underline">
            Explore
          </a>
          <a href="/" className="hover:underline">
            Become a Provider
          </a>
          <a href="/" className="hover:underline">
            Sign In
          </a>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Join
          </Button>
        </nav>
      </header>
      <div className="max-w-3xl">
        <h2 className="mb-6 text-5xl font-bold md:text-7xl">
          Our Drone Experts Will Take It From Here
        </h2>
        <div className="flex items-center overflow-hidden rounded-md bg-white">
          <Input
            type="search"
            placeholder="Search for any drone service..."
            className="w-full border-none p-6 text-lg text-black focus:ring-0"
          />
          <Button
            type="submit"
            className="h-full rounded-l-none bg-green-600 px-6 hover:bg-green-700"
          >
            <Search className="size-6" />
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            'Drone Piloting',
            'Aerial Photography',
            'Surveying & Mapping',
            'Drone Repair',
            'Agricultural Services',
          ].map(tag => (
            <Button
              key={tag}
              variant="outline"
              className="rounded-full border-gray-400 text-white hover:bg-white hover:text-black"
            >
              {tag}
              <ChevronRight className="ml-1 size-4" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
