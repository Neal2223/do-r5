import { Search, Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

export const ReviewsSection = () => {
  const reviews = [
    {
      user: 'Ilka J.',
      title: 'Fraud Risk Analyst',
      company: 'Mid-Market (51-1000 emp.)',
      reviewTitle: '“Essential Communication Tool for Modern Teams”',
      rating: 4.5,
      like: 'Slack makes team communication seamless and efficient. I love how intuitive and user-friendly the interface is, and the way channels help organize conversations by topic or project.',
      dislike: 'Slack truly enhances collaboration. The ability to integrate with tools like Google Drive, Jira, and Zoom makes it a central hub for all our work. Real-time messaging, file sharing, and thread-based replies keep everything organized.',
    },
    {
      user: 'Sunny R.',
      title: 'Office Manager',
      company: 'Architecture & Planning',
      reviewTitle: '“Streamlined Team Comms That Just Work – A Must-Have for Office Managers”',
      rating: 4.5,
      like: 'As an Office Manager, Slack makes my life significantly easier. I can keep tabs on multiple teams, coordinate facilities requests, share updates instantly, and even manage vendors—all without drowning in emails.',
      dislike: 'Notifications can get overwhelming fast, especially when juggling multiple channels and group DMs. Sometimes, key updates get buried under a flood of messages, which means I have to constantly pin or star items for follow-up.',
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>35,000 Slack Reviews</CardTitle>
          <p className="text-sm text-muted-foreground">4.8 out of 5 stars</p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-2">
            {[
              { stars: 5, percentage: 78, count: '28.1K' },
              { stars: 4, percentage: 18, count: '7.2K' },
              { stars: 3, percentage: 3, count: '1.2K' },
              { stars: 2, percentage: 1, count: '211' },
              { stars: 1, percentage: 1, count: '115' },
            ].map(item => (
              <div key={item.stars} className="flex items-center space-x-2">
                <span className="w-12 text-muted-foreground">
                  {item.stars}
                  {' '}
                  star
                </span>
                <Progress value={item.percentage} className="h-3 w-full" />
                <span className="w-12 text-right text-muted-foreground">{item.count}</span>
              </div>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search reviews" className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Slack Pros and Cons</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="flex items-center font-bold">
              <ThumbsUp className="mr-2 size-5 text-green-500" />
              {' '}
              Pros
            </h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Ease of Use</span>
              <span className="font-semibold">1,502</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Communication</span>
              <span className="font-semibold">1,028</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Team Collaboration</span>
              <span className="font-semibold">1,013</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="flex items-center font-bold">
              <ThumbsDown className="mr-2 size-5 text-red-500" />
              {' '}
              Cons
            </h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Missing Features</span>
              <span className="font-semibold">551</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Limited Features</span>
              <span className="font-semibold">312</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Notification Issues</span>
              <span className="font-semibold">230</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {reviews.map((review, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-start justify-between">
            <div className="flex space-x-4">
              <Avatar className="size-12">
                <AvatarFallback>
                  {review.user.charAt(0)}
                  {review.user.split(' ')[1].charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{review.user}</p>
                <p className="text-sm text-muted-foreground">{review.title}</p>
                <p className="text-sm text-muted-foreground">{review.company}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">7/18/2025</div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-xl font-bold">{review.reviewTitle}</h3>
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, j) => <Star key={j} fill={j < Math.floor(review.rating) ? 'currentColor' : 'none'} stroke="currentColor" className="size-5" />)}
              <span className="font-bold text-foreground">
                {review.rating}
                /5
              </span>
            </div>
            <div className="space-y-2">
              <p className="font-bold">What do you like best about Slack?</p>
              <p className="text-muted-foreground">{review.like}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">What do you dislike about Slack?</p>
              <p className="text-muted-foreground">{review.dislike}</p>
            </div>
            <div className="flex space-x-2">
              <Badge variant="secondary">Current User</Badge>
              <Badge variant="secondary">Validated Reviewer</Badge>
              <Badge variant="secondary">Source: Organic</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
