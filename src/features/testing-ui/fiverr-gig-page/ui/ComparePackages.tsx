import { Check } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ComparePackages = () => {
  const packages = [
    { name: 'Basic Drone Survey', price: '₹15,000', description: 'Initial Drone Consultation', details: 'A preliminary consultation to assess your drone service needs and project feasibility.' },
    { name: 'Standard Aerial Mapping', price: '₹40,000', description: 'Standard Mapping Service', details: 'High-resolution aerial mapping for up to 5 acres, including basic data processing.' },
    { name: 'Premium Inspection & Analysis', price: '₹75,000', description: 'Advanced Inspection & Analysis', details: 'Comprehensive drone inspection for structures or large areas, with detailed analysis and reporting.' },
  ];
  const features = [
    { name: 'Project Planning & Setup', availability: [true, true, true] },
    { name: 'Data Acquisition & Processing', availability: [false, true, true] },
    { name: 'Advanced Analytics & Reporting', availability: [false, false, true] },
    { name: 'Delivery Time', availability: ['2 Days', '5 Days', '10 Days'] },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Compare packages</h3>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Package</TableHead>
            {packages.map(p => (
              <TableHead key={p.name} className="text-center">
                {p.price}
                <br />
                <span className="text-lg font-bold text-foreground">{p.name}</span>
                <br />
                <span className="font-normal text-muted-foreground">{p.description}</span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            {packages.map(p => <TableCell key={p.name} className="text-center text-muted-foreground">{p.details}</TableCell>)}
          </TableRow>
          {features.map(feature => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              {feature.availability.map((available, index) => (
                <TableCell key={`${feature.name}-${index}`} className="text-center">
                  {typeof available === 'boolean'
                    ? (
                        available ? <Check className="mx-auto size-5 text-green-500" /> : <span className="text-muted-foreground">-</span>
                      )
                    : (
                        <span>{available}</span>
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TableCell></TableCell>
            {packages.map(p => <TableCell key={p.name} className="p-4 text-center"><Button className="w-full bg-black text-white hover:bg-gray-800">Select</Button></TableCell>)}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparePackages;
