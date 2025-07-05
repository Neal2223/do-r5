import React from 'react';

type ContentBlock = {
  type: 'paragraph' | 'heading';
  text: string;
};

type LegalLayoutProps = {
  title: string;
  hero: { title: string; subtitle: string };
  mainContent: ContentBlock[];
};

const LegalLayout: React.FC<LegalLayoutProps> = ({ hero, mainContent }) => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 border-b pb-8">
          <h1 className="text-5xl font-bold text-foreground">{hero.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{hero.subtitle}</p>
        </header>
        <article className="prose prose-lg max-w-none text-muted-foreground">
          {mainContent.map((block) => {
            if (block.type === 'heading') {
              return <h2 key={block.text} className="font-bold text-foreground">{block.text}</h2>;
            }
            return <p key={block.text}>{block.text}</p>;
          })}
        </article>
      </div>
    </main>
  );
};

export default LegalLayout;
