import { Bookmark, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const ProductHero = () => (
  <div className="space-y-6">
    <div className="relative flex h-64 items-center justify-center rounded-lg bg-muted">
      <Image src="https://assets-global.website-files.com/6218de55151590494511a2f9/6218de5515159084e611a37c_slack-logo.svg" alt="Slack Logo" width={80} height={80} className="h-20" />
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20">
        <Button variant="outline" size="icon" className="size-20 rounded-full border-white/50 bg-white/30 text-white backdrop-blur-sm hover:bg-white/40">
          <ChevronRight className="size-12" style={{ transform: 'translateX(3px)' }} />
        </Button>
      </div>
    </div>
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <Image src="https://assets-global.website-files.com/6218de55151590494511a2f9/6218de5515159084e611a37c_slack-logo.svg" alt="Slack Logo" width={64} height={64} className="size-16" />
          <div>
            <h2 className="text-2xl font-bold">Slack</h2>
            <div className="mt-1 flex items-center space-x-2">
              <div className="flex items-center text-yellow-500">
                <Star fill="currentColor" className="size-5" />
                <Star fill="currentColor" className="size-5" />
                <Star fill="currentColor" className="size-5" />
                <Star fill="currentColor" className="size-5" />
                <Star fill="currentColor" className="size-5" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
              <span className="font-bold">4.8</span>
              <a href="/" className="text-primary hover:underline">35,000 reviews</a>
            </div>
          </div>
        </div>
        <Button variant="outline">
          <Bookmark className="mr-2 size-4" />
          {' '}
          Save to My Lists
        </Button>
      </CardContent>
    </Card>
  </div>
);
