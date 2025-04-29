import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
  {
    name: "Andi Pratama",
    company: "GrowBiz Indonesia",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Weber.id membantu bisnis kami dengan website company profile yang sangat profesional. Respons cepat & hasil websitenya luar biasa. Pengunjung website meningkat 45% dalam 2 bulan pertama!",
    stars: 5,
  },
  {
    name: "Diana Wijaya",
    company: "Creative Photography",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Portfolio website yang dibuatkan oleh tim Weber.id mendapat banyak pujian dari klien. Desainnya elegan dan fungsionalitasnya lengkap. Sangat membantu karir saya sebagai fotografer!",
    stars: 5,
  },
  {
    name: "Budi Santoso",
    company: "Event Organizer Jakarta",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Undangan digital untuk event perusahaan kami dibuat dengan sangat baik. Tim Weber.id memahami kebutuhan kami dan mengimplementasikannya dengan sempurna. Pasti akan menggunakan jasa mereka lagi!",
    stars: 4,
  },
  {
    name: "Citra Lestari",
    company: "FashionHub Store",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Tim Weber.id sangat kreatif! Mereka berhasil membuat website toko online kami tidak hanya cantik tapi juga mudah digunakan. Penjualan online kami meningkat pesat setelah launching!",
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="pb-16 bg-gradient-to-bl from-white to-blue-100 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 md:opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('/wave-pattern.svg')`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-14 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Ulasan jujur dari klien setia kami yang telah merasakan dampak
            positif dari layanan Weber.id.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              image={testimonial.image}
              text={testimonial.text}
              stars={testimonial.stars}
            />
          ))}
        </div>

        {/* Subtle Highlight */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-blue-200 opacity-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;
