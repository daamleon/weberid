import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:justify-items-start justify-items-center">
          <div>
            <div className="max-w-[200px] justify-items-center">
              <img className="max-w-[200px]" src="/white2.png" alt="" />
              <h3 className="text-2xl font-bold mb-6">
                Weber<span className="text-blue-400">.id</span>
              </h3>
            </div>

            <p className="text-blue-200 mb-6">Web Cerdas untuk Bisnis Hebat</p>
            <div className="flex justify-center md:justify-start">
              <div className="flex gap-2">
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="justify-items-center md:justify-items-start">
            <h4 className="text-lg font-bold mb-6">Layanan</h4>
            <ul className="space-y-3 justify-items-center md:justify-items-start">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Landing Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Company Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Undangan Digital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Portfolio Web
                </a>
              </li>
            </ul>
          </div>

          <div className="justify-items-center md:justify-items-start">
            <h4 className="text-lg font-bold mb-6">Link</h4>
            <ul className="space-y-3 justify-items-center md:justify-items-start">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div className="justify-items-center md:justify-items-start">
            <h4 className="text-lg font-bold mb-6">Kontak</h4>
            <ul className="space-y-4 justify-items-center md:justify-items-start">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-blue-400 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-blue-200">
                  Jl. Webmaster No.123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  +62 8xxx-xxx-xxx
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:hello@weber.id"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  hello@weber.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Weber.id. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;