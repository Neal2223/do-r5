import React from 'react';

const TrustedBy = () => (
  <div className="bg-gray-100 py-6">
    <div className="container mx-auto flex items-center justify-center space-x-8 font-bold text-gray-500">
      <span className="text-lg">Trusted by:</span>
      {['Odisha Govt', 'Tech Mahindra', 'JCB', 'Utkal University', 'Startup Odisha'].map(partner => (
        <span key={partner} className="text-xl">{partner}</span>
      ))}
    </div>
  </div>
);

export default TrustedBy;
