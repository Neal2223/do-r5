export type PackageFeature = {
  text: string;
};

export type DronePackage = {
  id: 'basic' | 'standard' | 'premium';
  name: string;
  price: string;
  description: string;
  deliveryTime: string;
  features: PackageFeature[];
};

export const dronePackages: DronePackage[] = [
  {
    id: 'basic',
    name: 'BASIC DRONE CONSULTATION',
    price: '₹15,000',
    description: 'A preliminary consultation to assess your drone service needs and project feasibility.',
    deliveryTime: '2-day delivery',
    features: [{ text: 'Onboarding & training' }],
  },
  {
    id: 'standard',
    name: 'STANDARD AERIAL MAPPING',
    price: '₹40,000',
    description: 'High-resolution aerial mapping for up to 5 acres, including basic data processing.',
    deliveryTime: '5-day delivery',
    features: [
      { text: 'Project Planning & Setup' },
      { text: 'Data Acquisition & Processing' },
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM INSPECTION & ANALYSIS',
    price: '₹75,000',
    description: 'Comprehensive drone inspection for structures or large areas, with detailed analysis and reporting.',
    deliveryTime: '10-day delivery',
    features: [
      { text: 'Onboarding & training' },
      { text: 'Workflows implementation' },
      { text: 'Advanced Analytics & Reporting' },
    ],
  },
];
