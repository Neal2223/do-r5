import Image from 'next/image';
import React from 'react';

type Service = {
  name: string;
  imageSrc: string;
};

type TrustMarker = {
  iconSrc: string;
  value: string;
  label: string;
};

const services: Service[] = [
  { name: 'Aerial Photography', imageSrc: '/assets/images/hero/freepik__isometric-3d-drone-icon-for-aerial-photography-dro__74634.webp' },
  { name: 'Drone Mapping', imageSrc: '/assets/images/hero/freepik__isometric-3d-drone-icon-for-agricultural-mapping-d__74631.webp' },
  { name: 'Industrial Inspection', imageSrc: '/assets/images/hero/freepik__isometric-3d-drone-icon-for-agricultural-spraying-__74635.webp' },
  { name: 'Precision Agriculture', imageSrc: '/assets/images/hero/freepik__isometric-3d-drone-icon-for-aerial-photography-dro__74634.webp' },
  { name: 'Search & Rescue', imageSrc: '/assets/images/hero/freepik__isometric-3d-drone-icon-for-infrared-mapping-drone__74633.webp' },
];

const trustMarkers: TrustMarker[] = [
  { iconSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693570188661-dba2e7.jpeg', value: '4.9', label: 'Service Rating' },
  { iconSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693491890812-e86755.jpeg', value: '500+', label: 'Projects Completed' },
];

const DGCA_MARKER = {
  value: '100%',
  label: 'DGCA Certified Pilots',
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      key={service.name}
      className="flex cursor-pointer items-center rounded-lg bg-gray-100 p-4 transition-opacity hover:opacity-80"
      aria-label={`Service: ${service.name}`}
      tabIndex={0}
      role="button"
    >
      <p className="grow text-sm font-medium text-gray-800">{service.name}</p>
      <div className="relative size-14">
        <Image
          src={service.imageSrc}
          alt={service.name}
          fill
          className="rounded-md object-contain"
          sizes="56px"
        />
      </div>
    </div>
  );
}

function ServiceGridCard({ service }: { service: Service }) {
  return (
    <div
      key={service.name}
      className="group cursor-pointer"
      aria-label={`Service: ${service.name}`}
      tabIndex={0}
      role="button"
    >
      <div className="mb-2 flex justify-center">
        <div className="relative size-14">
          <Image
            src={service.imageSrc}
            alt={service.name}
            fill
            className="rounded-md object-contain transition-transform duration-200 ease-in-out group-hover:scale-105"
            sizes="56px"
          />
        </div>
      </div>
      <p className="relative text-xs text-gray-800 after:absolute after:inset-x-1/4 after:bottom-[-4px] after:h-[1.5px] after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
        {service.name}
      </p>
    </div>
  );
}

function TrustMarkerCard({ marker }: { marker: TrustMarker }) {
  return (
    <div key={marker.label} className="flex items-start">
      <div className="relative mr-4 size-12">
        <Image
          src={marker.iconSrc}
          alt={marker.label}
          fill
          className="object-contain"
          sizes="48px"
        />
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-900">{marker.value}</p>
        <p className="text-sm text-gray-600">{marker.label}</p>
      </div>
    </div>
  );
}

function DGCAMarkerCard() {
  return (
    <div className="flex items-start">
      <div className="relative mr-4 flex size-12 items-center justify-center rounded-full bg-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="DGCA Certified"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-900">{DGCA_MARKER.value}</p>
        <p className="text-sm text-gray-600">{DGCA_MARKER.label}</p>
      </div>
    </div>
  );
}

// Main component
// Left Column Component (60% width)
const LeftColumn = () => (
  <div className="space-y-6 lg:w-3/5">
    <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">
      Advanced Drone Solutions
      <span className="mt-2 block text-2xl text-blue-600 md:text-3xl">Elevating Perspectives, Delivering Precision</span>
    </h1>

    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-700">
        Explore Our Drone Services
      </h2>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.slice(0, 2).map(service => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 text-center sm:grid-cols-3 md:grid-cols-5">
        {services.slice(2).map(service => (
          <ServiceGridCard service={service} key={service.name} />
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-8 sm:flex-row">
      {trustMarkers.map(marker => (
        <TrustMarkerCard marker={marker} key={marker.label} />
      ))}
      <DGCAMarkerCard />
    </div>
  </div>
);

// Right Column Component (40% width)
const RightColumn = () => (
  <div className="flex items-center justify-center lg:w-2/5">
    <div className="relative aspect-[4/3] w-full">
      <Image
        src="/assets/images/hero/Layer 0 from Compress Image.webp"
        alt="Home services illustration"
        fill
        className="rounded-lg object-contain"
        sizes="(max-width: 1024px) 100vw, 40vw"
        priority
      />
    </div>
  </div>
);

// Main Component
export default function App() {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
