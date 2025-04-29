import React from "react";
import {
  ArrowRight,
} from "lucide-react";

interface Service {
 
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
  
    number: "01",
    title: "Landing Page",
    description:
      "Website 1 halaman untuk promosi cepat dan efektif. Sempurna untuk kampanye, produk, atau event.",
    image: "/mockup1.jpg",
    alt: "Contoh Landing Page 1",
  },
  {
   
    number: "02",
    title: "Company Profile",
    description:
      "Website bisnis resmi dengan struktur profesional. Tampilkan kredibilitas dan layanan perusahaan Anda.",
    image: "/mockup1.jpg",
    alt: "Contoh Company Profile 1",
  },
  {
    
    number: "03",
    title: "Undangan Digital",
    description:
      "Tampilan undangan interaktif & elegan. Solusi modern untuk pernikahan, ulang tahun, dan acara spesial.",
    image: "/mockup2.jpg",
    alt: "Contoh Undangan 1",
  },
  {
 
    number: "04",
    title: "Portfolio Web",
    description:
      "Showcase kreatif & responsif untuk personal/brand. Tampilkan karya terbaik Anda dengan desain menarik.",
    image: "/mockup2.jpg",
    alt: "Contoh Portfolio 1",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-bl from-white to-blue-100">
      <div className="container mx-auto px-6 md:px-14">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Best Business Services
          </h2>
          <p className="text-gray-600">
            Kami menyediakan berbagai layanan pembuatan website berkualitas
            tinggi sesuai kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="relative z-10 flex items-start gap-6 bg-white/5 backdrop-blur-sm hover:backdrop-blur-none transition-[1000] rounded-lg p-4">
                {" "}
                <div className="max-w-[80%]">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl font-bold text-blue-800">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#contact"
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <img
                src={service.image}
                alt={service.alt}
                className="absolute top-0 left-0 w-36 h-36 object-cover rounded-md shadow-sm -translate-x-6 
                -translate-y-6 rotate-6 "
              />
              <img
                src={service.image}
                alt={service.alt}
                className="absolute bottom-0 right-0 w- h-52 object-cover rounded-md shadow-sm -translate-y-6 rotate-6"
              />
              <img
                src={service.image}
                alt={service.alt}
                className="absolute left-0  w-24 h-24 object-cover rounded-md shadow-sm -translate-y-6 rotate-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
