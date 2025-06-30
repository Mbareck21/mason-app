"use client";

import { useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Custom Stone Fireplace",
    description: "Natural limestone fireplace with custom mantel and hearth",
    image: "/images/gallery/fireplace.jpg",
    category: "Interior",
  },
  {
    id: 2,
    title: "Outdoor Kitchen",
    description: "Flagstone outdoor kitchen with built-in grill and countertops",
    image: "/images/gallery/outdoor-kitchen.jpg",
    category: "Exterior",
  },
  {
    id: 3,
    title: "Stone Masonry",
    description: "Expertly crafted stone masonry with precise details and clean lines",
    image: "/images/services/custom-masonry.jpg",
    category: "Exterior",
  },
  {
    id: 4,
    title: "Masonry Repair",
    description: "Professional restoration and repair of existing stone structures",
    image: "/images/services/repair.jpg",
    category: "Maintenance",
  },
  {
    id: 5,
    title: "Stone Façade",
    description: "Full home exterior renovation with natural stone veneer",
    image: "/images/gallery/facade.jpg",
    category: "Exterior",
  },
  {
    id: 6,
    title: "Stone Veneer Installation",
    description: "Beautiful stone veneer application for interior and exterior surfaces",
    image: "/images/services/veneer.jpg",
    category: "Interior",
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Animation variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const filterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const swiperVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-stone-950" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="heading-lg text-stone-50 mb-6">
            Our <span className="text-orange-700">Gallery</span>
          </h2>
          <p className="text-lg text-stone-300">
            Browse through our portfolio of exceptional stonework projects across Northwest Arkansas.
            Each project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={filterVariants}
        >
          {["All", "Interior", "Exterior", "Maintenance"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-orange-700 text-white"
                  : "bg-stone-800 text-stone-300 hover:bg-stone-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="w-full mt-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={swiperVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="relative h-[400px] rounded-lg overflow-hidden group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-orange-700 text-white text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;



