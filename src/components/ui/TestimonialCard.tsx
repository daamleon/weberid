import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  text: string;
  stars: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  company, 
  image, 
  text, 
  stars 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < stars ? "text-yellow-400 fill-current" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{text}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-blue-900">{name}</h4>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;