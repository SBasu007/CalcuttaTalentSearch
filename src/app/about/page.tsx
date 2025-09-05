"use client";

import { motion } from "framer-motion";
import { Users, Paintbrush, CalendarDays, Globe, Award, Sparkles } from "lucide-react";

export default function About() {
  const items = [
    {
      title: "Franchise Opportunities",
      desc: "We offer a proven art training franchise model that helps passionate entrepreneurs build their own creative education centers.",
      Icon: Globe,
    },
    {
      title: "Art Workshops",
      desc: "Hands-on workshops designed for learners of all ages, focusing on painting, drawing, and other creative mediums.",
      Icon: Paintbrush,
    },
    {
      title: "Creative Events",
      desc: "We organize art exhibitions, competitions, and cultural events that bring communities together through creativity.",
      Icon: CalendarDays,
    },
    {
      title: "Student Development",
      desc: "Our structured training builds confidence, discipline, and creativity in children and adults alike.",
      Icon: Users,
    },
    {
      title: "Certifications",
      desc: "Recognized certifications for students and trainers that add value to academic and professional growth.",
      Icon: Award,
    },
    {
      title: "Innovation in Art",
      desc: "We constantly introduce new techniques and modern approaches to keep art learning exciting and relevant.",
      Icon: Sparkles,
    },
  ];

  return (
    <section className="mt-2 md:mt-2 bg-gradient-to-b from-white via-[#f5f9fc] to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-[#01315A] md:text-5xl">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            We are an art education platform dedicated to nurturing creativity. Through our franchise model, 
            workshops, and community events, we empower aspiring artists to learn, express, and share their talent with the world.
          </p>
        </motion.div>

        {/* What we do */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center justify-center">
            <h2 className="inline-block rounded-full bg-[#01315A]/10 px-6 py-2 text-base font-semibold text-[#01315A] shadow-sm">
              What We Do
            </h2>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map(({ title, desc, Icon }) => (
              <motion.li
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#01315A] to-[#02639f]"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#01315A] to-[#02639f] text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#01315A]">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-[#01315A] to-[#02639f] p-10 text-center shadow-xl"
        >
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            Join Our Creative Journey
          </h3>
          <p className="mt-3 text-sm text-blue-100">
            Want to start your own art training center or join one of our upcoming events? Let’s create something beautiful together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
