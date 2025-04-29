import React from "react";
import { Eye } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  url: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  category,
  description,
  url,
}) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm rounded-full mb-3">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              <Eye size={18} className="mr-2" /> View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
