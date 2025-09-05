"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const slides = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];
  const announcements = [
    "Admissions open for 2025 session.",
    "Annual sports event on 15th September.",
    "Parent-teacher meeting scheduled next week.",
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Carousel */}
      <section className="w-full h-[50vh] sm:h-[70vh] md:h-[90vh]">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 6500 }}
    loop
    className="w-full h-full"
  >
    {slides.map((src, index) => (
      <SwiperSlide key={index} className="relative w-full h-full">
        <Image
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
          priority={index === 0}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 sm:p-6 mt-[77px]">
          <h2 className="text-white text-xl sm:text-2xl md:text-5xl font-bold drop-shadow-lg mb-1 sm:mb-2">
            Welcome to Talent Search School
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-4 max-w-full sm:max-w-md">
            Nurturing young minds since 1995 with excellence in education and holistic development.
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* Announcements + Upcoming Events */}
<section className="w-full flex flex-col md:flex-row gap-6 md:gap-12 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
  {/* Upcoming Events */}
  <div className="flex-1">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
      Upcoming Events
    </h2>
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      <Image
        src="/slide1.jpg" // replace with actual event image
        alt="Upcoming Event"
        width={600}
        height={300}
        className="rounded-lg object-cover w-full h-[230px] sm:h-[310px]"
      />
      <h3 className="text-lg sm:text-xl font-bold mt-4">
        311th Monthly Baithak
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mt-2">
        <span className="font-semibold">3rd September 2025</span> | 6:30PM | Chandigarh
      </p>
      <button className="mt-4 bg-[#01315A] text-white px-5 py-2 rounded-full text-sm sm:text-base hover:bg-[#0156a6] transition">
        Register for Free
      </button>
    </div>
  </div>

  {/* Announcements */}
  <div className="w-full md:w-1/3 bg-[#01315A] text-white rounded-xl shadow p-6 flex flex-col">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
      Announcements
    </h2>

    <div className="flex flex-col gap-4 flex-grow">
      {announcements.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-white/20 pb-4 last:border-none"
        >
          <p className="font-semibold text-sm sm:text-base">{item}</p>
          <span className="text-xs sm:text-sm opacity-80">9 May 2025</span>
        </div>
      ))}
    </div>

    <button className="mt-6 bg-white text-[#01315A] font-semibold px-5 py-2 rounded-full text-sm sm:text-base hover:bg-gray-100 transition self-center">
      See all Announcements
    </button>
  </div>
</section>


      {/* About Us */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-20 bg-[#f9fafb] flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#01315A] mb-3 sm:mb-4">
            About Talent Search School
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
            Talent Search School has been nurturing young minds since 1995. Our mission is to provide quality education and holistic development to every child. We emphasize both academic excellence and extracurricular growth.
          </p>
          <button className="bg-[#01315A] text-white px-4 sm:px-6 py-2 rounded hover:bg-[#0156a6] transition text-sm sm:text-base">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 relative h-48 sm:h-64 md:h-80 w-full">
          <Image
            src="/slide3.jpg"
            alt="School Building"
            fill
            className="object-cover rounded-xl shadow"
          />
        </div>
      </section>
    </main>
  );
}