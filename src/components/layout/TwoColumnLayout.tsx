import React from 'react';

type TwoColumnLayoutProps = {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
};

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ mainContent, sidebarContent }) => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2">{mainContent}</div>
      <div className="lg:col-span-1">{sidebarContent}</div>
    </div>
  );
};

export default TwoColumnLayout;
