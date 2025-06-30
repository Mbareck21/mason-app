"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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

  const contactInfoVariants: Variants = {
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

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-stone-900" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="heading-lg text-stone-50 mb-6">
            Get in <span className="text-orange-700">Touch</span>
          </h2>
          <p className="text-lg text-stone-300">
            Whether you have a question about our services, need a consultation, 
            or are ready to start your project, we're here to help.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contactInfoVariants}
        >
          <div className="flex flex-col items-center text-center">
            <MapPin size={36} className="text-orange-700 mb-4" />
            <p className="text-stone-50 font-semibold mb-2">Our Location</p>
            <p className="text-stone-400">123 Stone Ave, Bentonville, AR 72712</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone size={36} className="text-orange-700 mb-4" />
            <p className="text-stone-50 font-semibold mb-2">Phone</p>
            <p className="text-stone-400">(479) 555-1234</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail size={36} className="text-orange-700 mb-4" />
            <p className="text-stone-50 font-semibold mb-2">Email</p>
            <p className="text-stone-400">info@masonworks.com</p>
          </div>
        </motion.div>

        <motion.form
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={formVariants}
          onSubmit={(e) => {
            e.preventDefault();
            // Form submission would typically be handled here
            alert('Thank you for your message! We will get back to you soon.');
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-stone-50 mb-1">Name</label>
            <input 
              id="name"
              name="name"
              type="text"
              required
              className="bg-stone-800 text-stone-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-stone-50 mb-1">Email</label>
            <input 
              id="email"
              name="email"
              type="email"
              required
              className="bg-stone-800 text-stone-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="text-stone-50 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-stone-800 text-stone-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-800 text-white py-4 px-8 rounded-md font-semibold transform transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;


