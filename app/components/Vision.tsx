"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import { 
  Clock, 
  Award, 
  Users, 
  Gem
} from "lucide-react";

const visionPoints = [
  {
    icon: <Clock size={24} className="text-orange-700" />,
    title: "Timeless Craftsmanship",
    description:
      "Our masonry work combines traditional techniques with modern innovation, creating structures that stand the test of time.",
  },
  {
    icon: <Award size={24} className="text-orange-700" />,
    title: "Superior Quality",
    description:
      "We source only the finest stone materials and employ skilled artisans who take pride in delivering exceptional results.",
  },
  {
    icon: <Users size={24} className="text-orange-700" />,
    title: "Client Partnership",
    description:
      "We work closely with you throughout the entire process, from concept to completion, ensuring your vision comes to life.",
  },
  {
    icon: <Gem size={24} className="text-orange-700" />,
    title: "Attention to Detail",
    description:
      "Every stone is carefully selected and placed with precision, creating beautiful patterns and textures that enhance your space.",
  },
];

const Vision = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="vision" className="py-20 md:py-32 bg-stone-950" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="heading-lg text-stone-50 mb-6">
                  Our <span className="text-orange-700">Vision</span>
                </h2>
                <p className="text-lg text-stone-300 mb-8">
                  For over a decade, MasonWorks has been committed to elevating the art of stone masonry in Northwest Arkansas. 
                  We believe that each stone tells a story, and our mission is to create structures that beautifully integrate with your 
                  property while standing strong for generations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-stone-900 p-6 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors"
                  >
                    <div className="mb-4">{point.icon}</div>
                    <h3 className="text-xl font-semibold text-stone-50 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-stone-400">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <Image
              src="/images/gallery/fireplace.jpg"
              alt="Stone masonry craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-stone-950/80 backdrop-blur-sm rounded-lg">
              <p className="text-lg font-semibold text-stone-50">
                "Every stone has a purpose, and every project tells a unique story."
              </p>
              <p className="text-stone-400 mt-2">- John Mason, Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;



