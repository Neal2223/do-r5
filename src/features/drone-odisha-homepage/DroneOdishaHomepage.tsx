import React from 'react';
import Footer from './components/Footer';
import HeaderNav from '@/features/testing-ui/fiverr-gig-page/ui/HeaderNav';
import HomeServicesHero from './components/HomeServicesHero';
import JobsByRole from '@/components/JobsByRole';
import PageLayout from '@/components/layout/PageLayout';
import PopularServices from './components/PopularServices';
import ProjectsShowcase from './components/ProjectsShowcase';
import PromoBanner from './components/PromoBanner';
import SuccessShowcase from './components/SuccessShowcase';
import TrustedBy from './components/TrustedBy';

const DroneOdishaHomepage = () => (
  <PageLayout header={<HeaderNav />} footer={<Footer />}>
    <HomeServicesHero />
    <TrustedBy />
    <PopularServices />
    <PromoBanner />
    <JobsByRole />
    <SuccessShowcase />
    <ProjectsShowcase />
  </PageLayout>
);

export default DroneOdishaHomepage;
