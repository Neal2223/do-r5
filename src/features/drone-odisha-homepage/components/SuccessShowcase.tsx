import React from 'react';

const SuccessShowcase = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h2 className="mb-2 text-4xl font-bold">What success with Drone Odisha looks like</h2>
    <p className="mb-8 text-lg text-gray-600">Odisha Eyewear turns to drone freelancers to bring their vision to life.</p>
    <video controls poster="https://placehold.co/1280x720/1f2937/a7f3d0?text=Drone+Success+Story" className="w-full rounded-lg shadow-xl">
      <track kind="captions" srcLang="en" label="English" />
      {/* Add video source here */}
    </video>
  </div>
);

export default SuccessShowcase;
