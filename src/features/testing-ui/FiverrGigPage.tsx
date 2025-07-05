import React from 'react';

import PageLayout from '@/components/layout/PageLayout';
import TwoColumnLayout from '@/components/layout/TwoColumnLayout';

import Footer from './fiverr-gig-page/ui/Footer';
import GigDetails from './fiverr-gig-page/ui/GigDetails';
import HeaderNav from './fiverr-gig-page/ui/HeaderNav';
import PackageSidebar from './fiverr-gig-page/ui/PackageSidebar';

// --- Main Component ---

function FiverrGigPage() {
  return (
    <PageLayout header={<HeaderNav />} footer={<Footer />}>
      <TwoColumnLayout
        mainContent={<GigDetails />}
        sidebarContent={<PackageSidebar />}
      />
    </PageLayout>
  );
}

export default FiverrGigPage;
