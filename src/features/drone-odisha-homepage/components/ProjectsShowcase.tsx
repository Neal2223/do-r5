import Image from 'next/image';
import React from 'react';

const ProjectsShowcase = () => {
  const images = [
    'https://placehold.co/400x300/e0f2f1/1e2937?text=Agriculture',
    'https://placehold.co/400x300/d1fae5/1e2937?text=Real+Estate',
    'https://placehold.co/400x300/a7f3d0/1e2937?text=Surveying',
    'https://placehold.co/400x300/6ee7b7/1e2937?text=Wedding',
    'https://placehold.co/400x300/34d399/1e2937?text=Inspection',
    'https://placehold.co/400x300/10b981/1e2937?text=Filmmaking',
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-4xl font-bold">Drone Projects Showcase</h2>
      <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
        {images.map((src, i) => (
          // Using array index as key is acceptable here since the order of images is static and won't change.
          <Image key={src} src={src} width={400} height={300} className="w-full rounded-lg shadow-md" alt={`Drone Project ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
