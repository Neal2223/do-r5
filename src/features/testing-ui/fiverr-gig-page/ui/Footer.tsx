import { CircleUserRound, Globe } from 'lucide-react';
import React from 'react';

import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const links = {
    'Categories': ['Aerial Photography', 'Drone Videography', '3D Mapping & Modeling', 'Agricultural Surveys', 'Infrastructure Inspection', 'Environmental Monitoring', 'Delivery & Logistics', 'Drone Consulting', 'Data Analysis', 'Custom Drone Solutions'],
    'For Clients': ['How Drone Odisha Works', 'Case Studies', 'Safety & Compliance', 'Drone Education', 'Client Resources', 'FAQs'],
    'For Freelancers': ['Become a Drone Pilot', 'Partner with Us', 'Pilot Resources', 'Community Forum', 'Webinars & Workshops'],
    'Business Solutions': ['Enterprise Drone Solutions', 'Fleet Management', 'Custom Project Development', 'Managed Drone Services', 'Talent Acquisition'],
    'Company': ['About Drone Odisha', 'Support Center', 'Our Mission', 'Careers', 'Privacy Policy', 'Terms of Service', 'Partnerships', 'News & Media'],
  };

  return (
    <footer className="border-t bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {Object.entries(links).map(([title, list]) => (
            <div key={title}>
              <h4 className="mb-4 font-bold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {list.map(link => <li key={link}><a href={`/pages/${link.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="hover:underline">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-foreground">Drone Odisha</h2>
          <p>© Drone Odisha 2024</p>
        </div>
        <div className="mt-4 flex items-center space-x-4 sm:mt-0">
          <div className="flex space-x-4">
            <Globe className="size-6 cursor-pointer hover:text-foreground" />
            <span className="cursor-pointer hover:text-foreground">English</span>
            <span className="cursor-pointer hover:text-foreground">₹ INR</span>
            <CircleUserRound className="size-6 cursor-pointer hover:text-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
