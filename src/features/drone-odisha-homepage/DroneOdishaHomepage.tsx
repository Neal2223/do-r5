import React from 'react';

import JobsByRole from '@/components/JobsByRole';
import PageLayout from '@/components/layout/PageLayout';
import HeaderNav from '@/features/testing-ui/fiverr-gig-page/ui/HeaderNav';
import SampleComponent from '@/features/testing-ui/section_trail/sample_component';

import Footer from './components/Footer';
import PopularServices from './components/PopularServices';
import ProjectsShowcase from './components/ProjectsShowcase';
import PromoBanner from './components/PromoBanner';
import SuccessShowcase from './components/SuccessShowcase';
import TrustedBy from './components/TrustedBy';

const DroneOdishaHomepage = () => (
  <PageLayout header={<HeaderNav />} footer={<Footer />}>
    <SampleComponent />
    <TrustedBy />
    <PopularServices />
    <PromoBanner />
    <JobsByRole />
    <SuccessShowcase />
    <ProjectsShowcase />
  </PageLayout>
);

export default DroneOdishaHomepage;
