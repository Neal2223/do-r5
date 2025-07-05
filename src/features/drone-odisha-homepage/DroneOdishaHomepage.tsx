import React from 'react';

import PageLayout from '@/components/layout/PageLayout';
import HeaderNav from '@/features/testing-ui/fiverr-gig-page/ui/HeaderNav';

import DroneOdishaPro from './components/DroneOdishaPro';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PopularServices from './components/PopularServices';
import ProjectsShowcase from './components/ProjectsShowcase';
import PromoBanner from './components/PromoBanner';
import SuccessShowcase from './components/SuccessShowcase';
import TrustedBy from './components/TrustedBy';

const DroneOdishaHomepage = () => (
  <PageLayout header={<HeaderNav />} footer={<Footer />}>
    <HeroSection />
    <TrustedBy />
    <PopularServices />
    <PromoBanner />
    <DroneOdishaPro />
    <SuccessShowcase />
    <ProjectsShowcase />
  </PageLayout>
);

export default DroneOdishaHomepage;
