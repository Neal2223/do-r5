import { Star } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

// Define the props for our reusable CategoryCard component
type CategoryCardProps = {
  imageUrl: string;
  altText: string;
  variant: 'rowOne' | 'rowTwo';
};

// Reusable sub-component for displaying a single service category
const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, altText, variant }) => {
  // Base classes common to both variants
  const baseClasses = 'flex items-center cursor-pointer group';

  // Variant-specific classes
  const variantClasses = {
    rowOne: 'bg-gray-100 rounded-lg p-2 h-[72px] w-full flex-row space-x-3 transition-opacity duration-200 hover:opacity-80',
    rowTwo: 'flex-col justify-center text-center w-full p-2 space-y-2',
  };

  const textClasses = {
    rowOne: 'text-xs font-medium text-gray-800',
    rowTwo: 'text-xs font-medium text-gray-800 group-hover:underline',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="shrink-0">
        <Image
          src={imageUrl}
          alt={altText}
          width={56}
          height={56}
          className="size-14 rounded-md object-contain"
        />
      </div>
      <p className={textClasses[variant]}>{altText}</p>
    </div>
  );
};

export default function HomeServicesHero() {
  const t = useTranslations('HomeServicesHero');

  // Data for the first row of categories
  const rowOneCategories = [
    {
      imageUrl:
        'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg',
      altText: t('womens_salon'),
    },
    {
      imageUrl:
        'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1750845033589-98cdfb.jpeg',
      altText: t('mens_salon'),
    },
  ];

  // Data for the second row of categories
  const rowTwoCategories = [
    {
      imageUrl:
        'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326936056-c3a39a.jpeg',
      altText: t('appliance_repair'),
    },
    {
      imageUrl:
        'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg',
      altText: t('cleaning'),
    },
    {
      imageUrl:
        'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png',
      altText: t('tradesmen'),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-4xl rounded-lg border border-gray-200 bg-white p-6 pb-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          {t('main_heading')}
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          {t('sub_heading')}
        </p>

        {/* First Row */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rowOneCategories.map(category => (
            <CategoryCard key={category.altText} {...category} variant="rowOne" />
          ))}
        </div>

        {/* Second Row */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {rowTwoCategories.map(category => (
            <CategoryCard key={category.altText} {...category} variant="rowTwo" />
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <Star className="mr-2 size-6 text-yellow-500" />
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">4.8</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('service_rating')}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">12M+</p>
            <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{t('customer_stat')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
