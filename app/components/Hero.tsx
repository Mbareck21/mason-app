"use client";

import { useRef, useEffect } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect values
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Text reveal animation variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };
  
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#9a3412", // orange-800
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" ref={containerRef}>
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y, opacity }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Stone masonry background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 to-stone-950/90 z-10"></div>
      </motion.div>
      
      {/* Content */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="heading-xl text-stone-50 leading-none mb-6"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <span className="text-orange-700">Crafting</span> Timeless 
            <span className="block mt-2">Stone Masterpieces</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-stone-300 mb-8 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Expert stone masonry for your home or business in Northwest Arkansas. 
            Premium materials, exceptional craftsmanship, built to last generations.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.a
              href="#contact"
              className="bg-orange-700 hover:bg-orange-800 text-white py-4 px-8 rounded-md font-semibold text-center transform transition-all duration-300 inline-block"
              whileHover="hover"
            >
              Get a Free Quote
            </motion.a>
            <motion.a
              href="#gallery"
              className="border-2 border-stone-400 hover:border-stone-50 text-stone-50 py-4 px-8 rounded-md font-semibold text-center transform transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 1.2,
              duration: 0.8,
            },
          }}
        >
          <span className="text-stone-400 text-sm mb-2">Scroll Down</span>
          <motion.div 
            className="w-0.5 h-8 bg-stone-400"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



