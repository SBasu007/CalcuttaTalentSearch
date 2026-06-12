import Image from 'next/image';

const galleryImages = [
  { src: '/slide1.jpg', alt: 'Gallery Item 1' },
  { src: '/2.jpg', alt: 'Gallery Item 2' },
  { src: '/3.jpg', alt: 'Gallery Item 3' },
  { src: '/4.jpg', alt: 'Gallery Item 4' },
  { src: '/5.jpg', alt: 'Gallery Item 5' },
  { src: '/6.jpg', alt: 'Gallery Item 6' },
];

export default function Gallery() {
  return (
    <section className="mt-2 md:mt-2 bg-gradient-to-b from-white via-[#f5f9fc] to-white py-16">                 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#01315A] sm:text-4xl md:text-5xl">
                    Gallery
                </h1>
                <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                    Explore our vibrant gallery showcasing the incredible talent of our students and the inspiring moments from our workshops and events. From stunning artwork to dynamic performances, our gallery captures the essence of creativity and growth that defines our community.
                </p>
            </div>
            <div className="mt-16 md:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#01315A] to-[#02639f] z-10"></div>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
}
