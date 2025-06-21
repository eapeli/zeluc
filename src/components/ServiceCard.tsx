import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#6C5CE7]/20 dark:group-hover:bg-[#6C5CE7]/30 transition-colors duration-300">
        <Icon className="text-[#6C5CE7] group-hover:text-[#00CEC9] transition-colors duration-300" size={32} />
      </div>
      
      <h3 className="text-xl font-bold text-[#6C5CE7] mb-3">{title}</h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="h-1 w-12 bg-[#00CEC9] group-hover:w-20 transition-all duration-300"></div>
    </div>
  );
};

export default ServiceCard;