import Image from 'next/image';
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 pt-16 text-gray-600">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
        {/* Footer links data */}
      </div>
      <div className="mt-8 flex items-center justify-between border-t py-6">
        <Image src="/logo.svg" alt="Drone Odisha Logo" width={150} height={36} />
        <p>© Drone Odisha Ltd. 2025</p>
      </div>
    </div>
  </footer>
);

export default Footer;
