import React, { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";

// Import your image assets
import image1 from "/mockup4.png";
import image2 from "/mockup2.jpg";
import image3 from "/mockup1.jpg";
import image4 from "/mockup4.png";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const intervalTime = 2000;
  const imageWidth = 600;
  const imageHeight = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Upgrade Your
              <br />
              Business Website
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Kami membantu bisnis Anda berkembang dengan website profesional
              yang modern, responsif, dan efektif untuk meningkatkan konversi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full transition-colors"
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={() =>
                  window.open("https://youtu.be/E4WlUXrJgy4", "_blank")
                }
                className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch The Video
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div
              className="relative z-10 rounded-t-xl shadow-2xl overflow-hidden transition-opacity duration-500 ease-in-out"
              style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
            >
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Business Showcase"
                className="object-cover"
                style={{ width: "100%", height: "100%", objectPosition: "top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
