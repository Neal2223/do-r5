'use client';

import { Menu, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const mainNavLinks = [
  { href: '/pages/enterprise-solutions', label: 'Enterprise Solutions' },
  { href: '/pages/explore-services', label: 'Explore Services' },
  { href: '/pages/become-a-pilot', label: 'Become a Pilot' },
  { href: '/pages/log-in', label: 'Log In' },
];

const secondaryNavLinks = [
  { href: '/pages/aerial-photography', label: 'Aerial Photography' },
  { href: '/pages/3d-mapping', label: '3D Mapping' },
  { href: '/pages/infrastructure-inspection', label: 'Infrastructure Inspection' },
  { href: '/pages/agricultural-surveys', label: 'Agricultural Surveys' },
  { href: '/pages/environmental-monitoring', label: 'Environmental Monitoring' },
  { href: '/pages/drone-videography', label: 'Drone Videography' },
  { href: '/pages/delivery-logistics', label: 'Delivery & Logistics' },
  { href: '/pages/custom-solutions', label: 'Custom Solutions' },
];

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full border-b border-border bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image src="/logo.svg" alt="Drone Odisha Logo" width={180} height={40} />
            </Link>
            <div className="hidden items-center overflow-hidden rounded-md border md:flex">
              <Input type="search" placeholder="Find drone services..." className="w-96 border-none focus:ring-0" />
              <Button type="submit" className="rounded-l-none bg-black text-white hover:bg-gray-800">
                <Search className="size-5" />
              </Button>
            </div>
          </div>
          <nav className="hidden items-center space-x-6 text-lg font-medium lg:flex">
            {mainNavLinks.map(link => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Sign Up
            </Button>
            <LocaleSwitcher />
          </nav>
          <div className="lg:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute left-0 top-20 z-50 w-full bg-background p-4 shadow-lg lg:hidden">
            <nav className="flex flex-col space-y-4">
              {mainNavLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Sign Up
              </Button>
              <Separator />
              {secondaryNavLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
        <Separator />
        <div className="hidden h-12 items-center justify-between overflow-x-auto font-medium text-muted-foreground md:flex">
          {secondaryNavLinks.map(link => (
            <Link key={link.label} href={link.href} className="whitespace-nowrap px-3 py-2 hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
