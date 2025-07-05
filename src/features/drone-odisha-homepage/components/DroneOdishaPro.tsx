import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const DroneOdishaPro = () => (
  <div className="container mx-auto my-10 flex items-center gap-10 rounded-lg bg-green-50 p-12 text-gray-800">
    <div className="w-1/2 space-y-6">
      <h3 className="text-4xl font-bold text-green-700">Drone Odisha Pro</h3>
      <h4 className="text-3xl font-bold">The premium drone service solution for businesses</h4>
      <ul className="space-y-4">
        {[
          { title: 'Dedicated Hiring Experts', desc: 'Count on an account manager to find you the right talent.' },
          { title: 'Satisfaction Guarantee', desc: 'Order confidently with guaranteed refunds for less-than-satisfactory deliveries.' },
          { title: 'Advanced Management Tools', desc: 'Seamlessly integrate freelancers into your team and projects.' },
        ].map(item => (
          <li key={item.title} className="flex items-start space-x-3">
            <CheckCircle className="mt-1 size-6 text-green-600" />
            <div>
              <h5 className="font-bold">{item.title}</h5>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button className="bg-green-700 px-8 py-6 text-lg text-white hover:bg-green-800">Try Now</Button>
    </div>
    <div className="w-1/2">
      <Image src="https://placehold.co/600x400/a7f3d0/1e293b?text=Business+Meeting" alt="Drone Odisha Pro" width={600} height={400} className="rounded-lg shadow-xl" />
    </div>
  </div>
);

export default DroneOdishaPro;
