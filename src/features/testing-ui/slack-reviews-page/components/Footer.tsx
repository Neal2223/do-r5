import { CircleUserRound, Globe } from 'lucide-react';
import React from 'react';

import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const links = {
    'Categories': ['Graphics & Design', 'Digital Marketing', 'Writing & Translation', 'Video & Animation', 'Music & Audio', 'Programming & Tech'],
    'For Clients': ['How Fiverr Works', 'Customer Success Stories', 'Trust & Safety', 'Quality Guide'],
    'For Freelancers': ['Become a Fiverr Freelancer', 'Community Hub', 'Forum', 'Events'],
    'Company': ['About', 'Help & Support', 'Careers', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="mt-16 border-t bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(links).map(([title, list]) => (
            <div key={title}>
              <h4 className="mb-4 font-bold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {list.map(link => <li key={link}><a href="/" className="hover:underline">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-foreground">G2</h2>
          <p>© G2, Inc. 2025</p>
        </div>
        <div className="mt-4 flex items-center space-x-4 sm:mt-0">
          <Globe className="size-6 cursor-pointer hover:text-foreground" />
          <span className="cursor-pointer hover:text-foreground">English</span>
          <CircleUserRound className="size-6 cursor-pointer hover:text-foreground" />
        </div>
      </div>
    </footer>
  );
};
