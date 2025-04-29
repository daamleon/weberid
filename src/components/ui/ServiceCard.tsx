import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group">
      <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;