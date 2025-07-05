'use client';

import React from 'react';

import PageLayout from '@/components/layout/PageLayout';
import TwoColumnLayout from '@/components/layout/TwoColumnLayout';
import Footer from '@/features/testing-ui/fiverr-gig-page/ui/Footer';
import HeaderNav from '@/features/testing-ui/fiverr-gig-page/ui/HeaderNav';

import SlackReviewDetails from './slack-reviews-page/components/SlackReviewDetails';
import { StickySideNav } from './slack-reviews-page/components/StickySideNav';

function SlackReviewsPage() {
  return (
    <PageLayout header={<HeaderNav />} footer={<Footer />}>
      <TwoColumnLayout
        mainContent={<SlackReviewDetails />}
        sidebarContent={<StickySideNav />}
      />
    </PageLayout>
  );
}

export default SlackReviewsPage;
