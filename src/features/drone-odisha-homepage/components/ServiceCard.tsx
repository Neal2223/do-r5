import Image from 'next/image';
import React from 'react';

type ServiceCardProps = {
  title: string;
  imageUrl: string;
  bgColor?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, bgColor = 'bg-green-800' }) => (
  <div className={`relative flex h-60 flex-col justify-end overflow-hidden rounded-lg p-4 text-white ${bgColor}`}>
    <Image src={imageUrl} alt={title} width={300} height={200} className="absolute inset-0 size-full object-cover opacity-30" />
    <h3 className="relative text-2xl font-bold">{title}</h3>
  </div>
);

export default ServiceCard;
