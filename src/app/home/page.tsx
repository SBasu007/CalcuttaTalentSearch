"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MobileCounter from "../components/MobileCounter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const slides = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];
  const announcements = [
    "Scholarship Exam Results Announced!",
  ];

  return (
    <main className="flex flex-col bg-orange-100">
      {/* Hero Carousel */}
      <section className="w-full px-4 md:px-0 mt-4 md:mt-0">
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 6500 }}
  loop
  className="w-full h-[30vh] sm:h-[55vh] md:h-[90vh] rounded-2xl md:rounded-none overflow-hidden shadow-xl"
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
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
          <h2 className="text-white text-lg sm:text-2xl md:text-5xl font-bold drop-shadow-lg mb-1 sm:mb-2">
            Welcome to Talent Search School
          </h2>
          <p className="text-white text-xs sm:text-base md:text-lg mb-2 sm:mb-4 max-w-full sm:max-w-md opacity-90">
            Nurturing young minds since 1995 with excellence in education and holistic development.
          </p>
        </div> */}
      </SwiperSlide>
    ))}
  </Swiper>
</section>
{/* Mobile Achievement Counter */}
<section className="md:hidden px-4 mt-8 mb-2 relative z-20">
  <div className="bg-[#01315A] rounded-2xl shadow-2xl py-5 px-3">
    <div className="flex justify-between items-center">
      
      <div className="flex-1 text-center">
        <h3 className="text-white font-bold text-2xl">
          <MobileCounter end={35000} />
        </h3>
        <p className="text-white/80 text-[10px] uppercase tracking-wider mt-1">
          Students
        </p>
      </div>

      <div className="h-10 w-px bg-white/20" />

      <div className="flex-1 text-center">
        <h3 className="text-white font-bold text-2xl">
          <MobileCounter end={4000} />
        </h3>
        <p className="text-white/80 text-[10px] uppercase tracking-wider mt-1">
          Schools
        </p>
      </div>

      <div className="h-10 w-px bg-white/20" />

      <div className="flex-1 text-center">
        <h3 className="text-white font-bold text-2xl">
          <MobileCounter end={6000} />
        </h3>
        <p className="text-white/80 text-[10px] uppercase tracking-wider mt-1">
          Teachers
        </p>
      </div>

    </div>
  </div>
</section>
      {/* Announcements + Upcoming Events */}
<section className="w-full flex flex-col md:flex-row gap-6 md:gap-12 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
  {/* Upcoming Events */}
  <div className="flex-1">
   <h2
  className="
    font-[family-name:var(--font-playfair)]
    text-[#01315A]
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    mb-3 sm:mb-4
  "
>
  Upcoming Events
</h2>
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      <Image
  src="/event.png"
  alt="Upcoming Event"
  loading="lazy"
  width={600}
  height={600}
  className="rounded-lg w-full h-[245px] sm:h-[330px] object-contain"
/>
      <h3 className="text-lg sm:text-xl font-bold mt-4 mx-auto text-center">
        Scholarship in Art 2026
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mt-2 mx-auto text-center">
        <span className="font-semibold">21st June 2026</span> (Online) |  <span className="font-semibold">28th June 2026</span> (Offline) | Five Centers
      </p>
      {/* <button className="mt-4 mx-auto block bg-[#01315A] text-white px-5 py-2 rounded-full text-sm sm:text-base hover:bg-[#0156a6] transition">
        Register for Free
      </button> */}
    </div>
  </div>

  {/* Announcements */}
  <div className="w-full md:w-1/3 bg-[#01315A] text-white rounded-xl shadow p-6 pt-2 flex flex-col">
    <h2 className="font-[family-name:var(--font-playfair)] text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold mb-3">
      Announcements
    </h2>
    <hr className="border-white/20 my-4" />
    <div className="flex flex-col gap-4 flex-grow">
      {announcements.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-white/20 pb-4 last:border-none"
        >
          <Link
            href="/scholarship"
            className="font-semibold mr-2 text-sm sm:text-base transition hover:text-white/80 hover:underline"
          >
            {item}
          </Link>
          <span className="text-xs sm:text-sm opacity-80">20th July 2026</span>
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
            Calcutta Talent Search School was established in the year 1991 and received Society Registration in the same year. Today, it is one of the biggest art & craft organization in India with a team of 1000+ schools 35,000+ students and 1800+ teachers.
Large numbers of reputed artists are associated with this institution. Some international scholars have also visited this institution. We conduct several activities like Examination, Painting, Marketing, Workshops Online Teaching, and more.
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