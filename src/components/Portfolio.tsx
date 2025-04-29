import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import PortfolioCard from "./ui/PortfolioCard";

const portfolioData = [
  {
    image: "/porto1.png",
    title: "Leon Adven",
    category: "Landing page",
    description:
      "Website perusahaan konsultan bisnis dengan desain modern dan profesional.",
  },
  {
    image:
      "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Travus Adventure",
    category: "Landing Page",
    description:
      "Landing page untuk travel adventure dengan UI yang dinamis dan menarik.",
  },
  {
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "EcoGreen Initiative",
    category: "Landing Page",
    description: "Website kampanye lingkungan dengan visual yang impactful.",
  },
  {
    image:
      "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "StartUp Hub",
    category: "Company Profile",
    description:
      "Platform komunitas startup dengan fitur interaktif dan modern.",
  },
  {
    image:
      "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tech Conference 2024",
    category: "Landing Page",
    description: "Landing page event teknologi dengan desain futuristik.",
  },
  {
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Creative Agency Pro",
    category: "Company Profile",
    description: "Website agensi kreatif dengan portofolio interaktif.",
  },
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= portfolioData.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(portfolioData.length - itemsPerPage, 0)
        : prevIndex - itemsPerPage
    );
  };

  const currentItems = portfolioData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-blue-100 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-14">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Karya Unggulan Kami
          </h2>
          <p className="text-gray-600">
            Intip beberapa proyek website terbaik yang telah kami rampungkan,
            menunjukkan keahlian kami dalam berbagai sektor industri.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item, index) => (
              <PortfolioCard
                key={index + currentIndex}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors duration-200"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? "bg-blue-600"
                      : "bg-blue-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors duration-200"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <a
            href="#contact"
            className="flex items-center justify-center mt-8 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Lihat Semua Proyek <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
