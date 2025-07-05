import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MyPortfolio = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold">My Portfolio</h3>
    <Card>
      <CardContent className="flex space-x-6 p-6">
        <Image src="https://placehold.co/400x250/a7f3d0/1e293b?text=Drone+Survey" alt="Portfolio main" width={400} height={250} className="w-1/2 rounded-lg" />
        <div className="space-y-4">
          <p className="text-muted-foreground">From: March 2024</p>
          <h4 className="text-xl font-bold">Agricultural Drone Survey</h4>
          <p className="text-muted-foreground">Conducted an agricultural survey using drones to assess crop health and optimize irrigation.</p>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">Data Analysis</Badge>
            <span className="text-muted-foreground">+4</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Project cost</p>
              <p className="text-muted-foreground">\\$1500 - \\$2500</p>
            </div>
            <div>
              <p className="font-semibold">Project duration</p>
              <p className="text-muted-foreground">3-5 days</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <div className="flex space-x-2">
      <Image src="https://placehold.co/100x75/a7f3d0/1e293b?text=Drone+Thumb1" alt="thumbnail 1" width={100} height={75} className="rounded-md" />
      <Image src="https://placehold.co/100x75/a7f3d0/1e293b?text=Drone+Thumb2" alt="thumbnail 2" width={100} height={75} className="rounded-md" />
    </div>
  </div>
);

export default MyPortfolio;
