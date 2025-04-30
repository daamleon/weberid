import React from "react";
import { MessageSquare } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-300 to-blue-900 text-white relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 md:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/pattern-dots.svg')`,
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="absolute bottom-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-blue-600 rounded-full blur-lg opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-xl opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Siap Memulai Petualangan Digitalmu?
          </h2>
          <p className="text-lg md:text-xl mb-12 text-blue-100">
            Tim ahli kami bersemangat untuk mewujudkan ide websitemu. Mari
            diskusikan visi Anda dan buat dampak online yang tak terlupakan.
          </p>

          <div className="flex justify-center space-x-4 md:space-x-6">
            <a
              href="https://wa.me/6285155499795"
              target="_blank"
              className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              <MessageSquare size={24} className="mr-3" />
              Konsultasi Gratis
            </a>
          </div>

          <p className="mt-8 text-blue-100 text-sm md:text-base">
            Atau kirimkan pesan kepada kami melalui WhatsApp di{" "}
            <a
              href="https://wa.me/6285155499795"
              target="_blank"
              className="font-semibold underline"
            >
              +62 851-5549-9795
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
