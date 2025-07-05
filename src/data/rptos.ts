import { z } from 'zod';

// Zod schema for a single course
export const CourseSchema = z.object({
  id: z.string(),
  name: z.string(),
  duration: z.string(),
  description: z.string(),
});

// Zod schema for a single RPTO
export const RptoSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.string(),
  address: z.string(),
  logoUrl: z.string(),
  contactEmail: z.string().email(),
  website: z.string().url(),
  description: z.string(),
  courses: z.array(CourseSchema),
});

export type Course = z.infer<typeof CourseSchema>;
export type Rpto = z.infer<typeof RptoSchema>;

// Example RPTO data (array)
export const rptos: Rpto[] = [
  {
    id: 'rpto-bhubaneswar-1',
    name: 'Odisha Drone Academy',
    city: 'Bhubaneswar',
    address: '123 Tech Park, Infocity, Bhubaneswar, Odisha',
    logoUrl: '/logos/rpto/odisha-drone-academy.png',
    contactEmail: 'admissions@odadrone.com',
    website: 'https://odadrone.com',
    description:
      'Leading RPTO in Odisha providing certified drone pilot training with advanced simulators and hands-on flight sessions.',
    courses: [
      {
        id: 'course-basic-01',
        name: 'Basic Drone Pilot Certification',
        duration: '7 Days',
        description:
          'A comprehensive course for beginners covering all DGCA-mandated topics.',
      },
      {
        id: 'course-advanced-02',
        name: 'Advanced Agricultural Drone Operations',
        duration: '14 Days',
        description:
          'Specialized training for using drones in agriculture, including crop monitoring and spraying.',
      },
    ],
  },
];
