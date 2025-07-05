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
export const rptos: Rpto[] = (() => {
  const cities = [
    'Amaravati',
    'Itanagar',
    'Dispur',
    'Patna',
    'Naya Raipur',
    'Panaji',
    'Gandhinagar',
    'Chandigarh',
    'Shimla',
    'Ranchi',
    'Bengaluru',
    'Thiruvananthapuram',
    'Bhopal',
    'Mumbai',
    'Imphal',
    'Shillong',
    'Aizawl',
    'Kohima',
    'Bhubaneswar',
    'Jaipur',
    'Gangtok',
    'Chennai',
    'Hyderabad',
    'Agartala',
    'Lucknow',
    'Dehradun',
    'Kolkata',
    'Port Blair',
    'Daman',
    'New Delhi',
    'Kavaratti',
    'Pondicherry',
    'Srinagar',
    'Jammu',
    'Leh',
  ];

  const mockRptos: Rpto[] = [];
  for (let i = 0; i < 100; i++) {
    const city = cities[i % cities.length] as string;
    const rptoName = `Drone Academy ${i + 1}`;
    const rptoId = `rpto-${city.toLowerCase().replace(/ /g, '-')}-${i + 1}`;
    const courseName1 = `Basic Drone Pilot Course ${Math.floor(Math.random() * 100)}`;
    const courseName2 = `Advanced Drone Operations ${Math.floor(Math.random() * 100)}`;

    mockRptos.push({
      id: rptoId,
      name: rptoName,
      city,
      address: `${Math.floor(Math.random() * 1000) + 1} ${city} Tech Park, ${city}, India`,
      logoUrl: '/logos/rpto/odisha-drone-academy.png',
      contactEmail: `info${i + 1}@${city.toLowerCase().replace(/ /g, '')}drone.com`,
      website: `https://www.${city.toLowerCase().replace(/ /g, '')}drone.com`,
      description: `A leading RPTO in ${city} offering comprehensive drone pilot training and specialized courses.`,
      courses: [
        {
          id: `course-${i + 1}-1`,
          name: courseName1,
          duration: `${Math.floor(Math.random() * 10) + 5} Days`,
          description: `This course covers the fundamentals of drone piloting and safety regulations.`,
        },
        {
          id: `course-${i + 1}-2`,
          name: courseName2,
          duration: `${Math.floor(Math.random() * 10) + 10} Days`,
          description: `Advanced training for specialized drone applications like surveying and agriculture.`,
        },
      ],
    });
  }
  return mockRptos;
})();
