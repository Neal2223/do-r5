import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const SlackOverview = () => (
  <Card>
    <CardHeader><CardTitle>Slack Overview</CardTitle></CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h3 className="mb-2 font-bold">What is Slack?</h3>
        <p className="text-muted-foreground">Slack is your single workspace that connects you with the people and tools you work with everyday, no matter where you are or what you do. With Slack you get real-time messaging through calls and chat, a searchable record of all your files and conversations, and integrations with a growing number of handy bots and apps. Now everyone can finally be on the same page and get their work done. Slack: It’s where work happens.</p>
      </div>
      <Separator />
      <div>
        <h3 className="mb-2 font-bold">Slack Details</h3>
        <p className="text-muted-foreground">
          Product Website:
          <a href="/" className="text-primary">slack.com</a>
        </p>
        <p className="text-muted-foreground">Languages Supported: English, French, German, Italian, Japanese, Korean, Portuguese, Spanish</p>
      </div>
    </CardContent>
  </Card>
);
