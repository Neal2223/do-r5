import React from 'react';

type PageLayoutProps = {
  title: string;
  content: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, content }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-foreground">{title}</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
