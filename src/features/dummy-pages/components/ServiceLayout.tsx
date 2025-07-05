import React from 'react';

type ContentBlock = {
  type: 'paragraph' | 'heading';
  text: string;
};

type ServiceLayoutProps = {
  title: string;
  hero: { title: string; subtitle: string };
  mainContent: ContentBlock[];
};

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ hero, mainContent }) => {
  return (
    <main>
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">{hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl">{hero.subtitle}</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="prose prose-lg mx-auto max-w-none text-muted-foreground">
          {mainContent.map((block) => {
            if (block.type === 'heading') {
              return <h2 key={block.text} className="font-bold text-foreground">{block.text}</h2>;
            }
            return <p key={block.text}>{block.text}</p>;
          })}
        </div>
      </section>
    </main>
  );
};

export default ServiceLayout;
