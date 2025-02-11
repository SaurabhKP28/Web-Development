import React from 'react';

interface AdPlaceholderProps {
  type?: 'banner' | 'rectangle' | 'skyscraper';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type = 'banner', className = '' }) => {
  const containerClasses = {
    banner: 'w-full h-[90px]',
    rectangle: 'w-[300px] h-[250px]',
    skyscraper: 'w-[160px] h-[600px]',
  };

  return (
    <div className={`ad-container ${containerClasses[type]} ${className}`}>
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        Advertisement
      </div>
    </div>
  );
};

export default AdPlaceholder;