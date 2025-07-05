import React from 'react';

import { Breadcrumb } from '@/components/ui/breadcrumb';

import { ProductHero } from './ProductHero';
import { ReviewsSection } from './ReviewsSection';
import { SlackOverview } from './SlackOverview';

const SlackReviewDetails = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Software', href: '/software' },
    { label: 'Slack Reviews', href: '/testing-ui/slack-reviews' },
  ];

  return (
    <div className="space-y-8">
      <div className="container mx-auto p-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ProductHero />
      <SlackOverview />
      <ReviewsSection />
    </div>
  );
};

export default SlackReviewDetails;
