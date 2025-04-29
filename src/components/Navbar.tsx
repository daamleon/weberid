import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div
        className={`container mx-auto max-w-6xl transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-lg"
        } rounded-full px-5 py-3`}
      >
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-10 h-8 md:w-[30px] md:h-[25px]"
                src="/mainlogo.png"
                alt=""
              />
              <a
                href="#"
                className="hidden md:block text-2xl font-bold text-blue-900 no-underline"
              >
                Weber<span className="text-blue-400">.id</span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-blue-900 hover:text-primary-600 font-medium transition-colors"
            >
              Beranda
            </a>
            <a
              href="#services"
              className="text-blue-900 hover:text-primary-600 font-medium transition-colors"
            >
              Layanan
            </a>
            <a
              href="#portfolio"
              className="text-blue-900 hover:text-primary-600 font-medium transition-colors"
            >
              Portofolio
            </a>
            <a
              href="#about"
              className="text-blue-900 hover:text-primary-600 font-medium transition-colors"
            >
              Tentang Kami
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              <Phone size={22} className="mr-3" />
              Hubungi kami
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg p-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-blue-900 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#services"
                className="text-blue-900 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Layanan
              </a>
              <a
                href="#portfolio"
                className="text-blue-900 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portofolio
              </a>
              <a
                href="#about"
                className="text-blue-900 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
              >
                <Phone size={24} className="mr-3" />
                Konsultasi Gratis
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
