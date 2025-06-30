"use client";

import { useRef } from "react";
import { motion, Variants, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    location: "Bentonville, AR",
    quote:
      "We hired MasonWorks for our outdoor kitchen and fire pit project, and the results exceeded our expectations. The team was professional, detail-oriented, and completed the work on schedule. We're absolutely thrilled with our new outdoor living space.",
    rating: 5,
    image: "/images/testimonials/client-1.jpg",
  },
  {
    id: 2,
    name: "Jennifer Wilson",
    location: "Fayetteville, AR",
    quote:
      "After getting quotes from several contractors, we chose MasonWorks for our stone veneer project. The quality of their craftsmanship is outstanding, and they were respectful of our home throughout the process. I highly recommend them to anyone looking for superior masonry work.",
    rating: 5,
    image: "/images/testimonials/client-2.jpg",
  },
  {
    id: 3,
    name: "Robert Davis",
    location: "Rogers, AR",
    quote:
      "MasonWorks transformed the exterior of our home with a beautiful stone façade. Their attention to detail and commitment to quality were evident at every stage of the project. The finished result has dramatically improved our curb appeal.",
    rating: 5,
    image: "/images/testimonials/client-3.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "Springdale, AR",
    quote:
      "We had MasonWorks build a retaining wall on our sloped property, and they did an excellent job. Not only does it look beautiful, but it has also solved our erosion issues. Their knowledge and expertise in proper construction techniques gave us confidence throughout the project.",
    rating: 5,
    image: "/images/testimonials/client-4.jpg",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  const swiperVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-stone-950" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="heading-lg text-stone-50 mb-6">
            Client <span className="text-orange-700">Testimonials</span>
          </h2>
          <p className="text-lg text-stone-300">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with MasonWorks.
          </p>
        </motion.div>

        <motion.div
          className="w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={swiperVariants}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-testimonials",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  className="bg-stone-900 p-8 rounded-lg border border-stone-800 h-full flex flex-col relative"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    borderColor: "rgb(194, 65, 12, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute -top-4 -right-4 text-orange-700">
                    <Quote size={48} className="opacity-20" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < testimonial.rating
                            ? "text-orange-700"
                            : "text-stone-600"
                        }`}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-stone-300 italic mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center mt-auto pt-4 border-t border-stone-800">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        delay: 0.2 * testimonial.id // Staggered animation based on ID
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 8px rgba(234, 88, 12, 0.5)"
                      }}
                      className="rounded-full"
                    >
                      <Avatar.Root className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-orange-800 shadow-lg">
                        <Avatar.Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                        />
                        <Avatar.Fallback className="absolute inset-0 bg-stone-800 flex items-center justify-center text-orange-700 font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </Avatar.Fallback>
                      </Avatar.Root>
                    </motion.div>
                    <motion.div 
                      className="ml-4"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 * testimonial.id }}
                    >
                      <h4 className="text-stone-50 font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-stone-500 text-sm">{testimonial.location}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-testimonials flex justify-center mt-8 space-x-2"></div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-300 hover:text-stone-50 transition-colors"
          >
            <span>Read more client reviews on Google</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;



