"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import {
  MessageSquare,
  Pencil,
  Hammer,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    icon: <MessageSquare size={28} className="text-orange-700" />,
    title: "1. Consultation",
    description:
      "We begin with a detailed consultation to understand your vision, needs, and budget. Our experts will assess your space and discuss material options.",
  },
  {
    icon: <Pencil size={28} className="text-orange-700" />,
    title: "2. Design & Planning",
    description:
      "Our designers create a custom plan for your project, including material selection, layout drawings, and detailed timeline and budget estimates.",
  },
  {
    icon: <Hammer size={28} className="text-orange-700" />,
    title: "3. Expert Execution",
    description:
      "Our skilled masons bring your vision to life, working with precision and care. We keep you updated throughout the construction process.",
  },
  {
    icon: <CheckCircle size={28} className="text-orange-700" />,
    title: "4. Final Inspection",
    description:
      "We conduct a thorough final inspection with you to ensure every detail meets our high standards and your complete satisfaction.",
  },
];

const Process = () => {
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

  const stepsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-stone-900" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="heading-lg text-stone-50 mb-6">
            Our <span className="text-orange-700">Process</span>
          </h2>
          <p className="text-lg text-stone-300">
            We've refined our process over years of experience to ensure every 
            project is completed seamlessly, on time, and to the highest standards 
            of quality and craftsmanship.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stepsContainerVariants}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6 mb-12 last:mb-0 relative"
              variants={stepVariants}
            >
              {/* Vertical line connecting steps */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="absolute left-10 top-16 w-0.5 h-[calc(100%+48px)] bg-stone-700 z-0"
                  variants={lineVariants}
                  style={{ transformOrigin: "top" }}
                ></motion.div>
              )}
              
              {/* Icon circle */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-stone-800 rounded-full border-2 border-stone-700 flex-shrink-0">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="pt-3">
                <h3 className="text-2xl font-bold text-stone-50 mb-3">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block bg-orange-700 hover:bg-orange-800 text-white py-4 px-8 rounded-md font-semibold transform transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;



