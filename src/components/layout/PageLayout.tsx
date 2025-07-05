'use client';

import React, { useState } from 'react';

import LayoutSwitcher from '@/features/testing-ui/fiverr-gig-page/ui/LayoutSwitcher';

type PageLayoutProps = {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ header, footer, children }) => {
  const [currentLayout, setCurrentLayout] = useState('max-w-screen-xl'); // Default to boxed XL

  const getLayoutClasses = () => {
    if (currentLayout === 'full-width') {
      return 'px-4 py-12'; // Full width, but keep padding
    } else {
      return `container mx-auto px-4 py-12 ${currentLayout}`;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {header}
      <main className={getLayoutClasses()}>{children}</main>
      {footer}

      {process.env.NODE_ENV !== 'production' && (
        <LayoutSwitcher onLayoutChange={setCurrentLayout} currentLayout={currentLayout} />
      )}
    </div>
  );
};

export default PageLayout;
