"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-stone-50 mb-4">
              MASON<span className="text-orange-700">WORKS</span>
            </h3>
            <p className="mb-6">
              Creating beautiful, durable stonework for residential and commercial properties in Northwest Arkansas since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-semibold text-stone-50 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "#services" },
                { name: "Gallery", href: "#gallery" },
                { name: "Process", href: "#process" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <motion.li key={link.name} variants={fadeInUpVariants}>
                  <Link 
                    href={link.href}
                    className="hover:text-stone-50 transition-colors relative inline-block"
                  >
                    <span className="relative inline-block group">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-semibold text-stone-50 mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Custom Stone Masonry",
                "Stone Veneer Installation",
                "Retaining Walls",
                "Outdoor Kitchens",
                "Fire Pits & Fireplaces",
              ].map((service) => (
                <motion.li key={service} variants={fadeInUpVariants}>
                  <Link 
                    href="#services"
                    className="hover:text-stone-50 transition-colors"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-semibold text-stone-50 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li variants={fadeInUpVariants} className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-orange-700 flex-shrink-0" />
                <span>123 Stone Ave, Bentonville, AR 72712</span>
              </motion.li>
              <motion.li variants={fadeInUpVariants} className="flex items-center">
                <Phone size={20} className="mr-3 text-orange-700 flex-shrink-0" />
                <a href="tel:+14795551234" className="hover:text-stone-50 transition-colors">
                  (479) 555-1234
                </a>
              </motion.li>
              <motion.li variants={fadeInUpVariants} className="flex items-center">
                <Mail size={20} className="mr-3 text-orange-700 flex-shrink-0" />
                <a href="mailto:info@masonworks.com" className="hover:text-stone-50 transition-colors">
                  info@masonworks.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} MasonWorks. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-stone-800 hover:bg-stone-700 text-stone-300 p-3 rounded-full transition-colors flex items-center justify-center"
            whileHover={{ y: -3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

