"use client";

import { useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    id: "service-1",
    title: "Custom Stone Masonry",
    short: "Bespoke stonework for any architectural style",
    description:
      "We create custom stone features that enhance the architectural character of your home or business. From decorative stone accents to full stone façades, our expert masons work with a variety of stone types to achieve your desired aesthetic.",
    image: "/images/services/custom-masonry.jpg",
  },
  {
    id: "service-2",
    title: "Stone Veneer Installation",
    short: "Transform your space with natural or manufactured stone veneer",
    description:
      "Add the beauty of stone to any surface with our professional veneer installation services. We offer both natural and manufactured stone veneer options, expertly installed to provide lasting beauty and durability.",
    image: "/images/services/veneer.jpg",
  },
  {
    id: "service-3",
    title: "Outdoor Living Spaces",
    short: "Extend your living area with beautiful outdoor spaces",
    description:
      "Create an outdoor oasis with custom stone features. We design and build outdoor kitchens, fire pits, fireplaces, seating walls, and other elements that transform your yard into a functional and beautiful extension of your home.",
    image: "/images/gallery/outdoor-kitchen.jpg",
  },
  {
    id: "service-4",
    title: "Retaining Walls & Hardscapes",
    short: "Functional and beautiful landscape solutions",
    description:
      "Our engineered retaining walls combine structural integrity with aesthetic appeal. We also create custom hardscape elements including walkways, patios, and steps that enhance your landscape while providing practical solutions for your property.",
    image: "/images/gallery/facade.jpg",
  },
  {
    id: "service-5",
    title: "Masonry Repair & Restoration",
    short: "Bring new life to existing stonework",
    description:
      "Our skilled craftsmen can repair, restore, or repoint existing masonry to address structural issues or refresh the appearance of your stonework. We match materials and techniques to ensure seamless integration with your original construction.",
    image: "/images/services/repair.jpg",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openItem, setOpenItem] = useState<string | null>(null);

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

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleAccordionChange = (value: string | null) => {
    setOpenItem(value);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-stone-900" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="heading-lg text-stone-50 mb-6">
            Our <span className="text-orange-700">Services</span>
          </h2>
          <p className="text-lg text-stone-300">
            From custom stone features to complete outdoor living spaces, 
            we offer a full range of masonry services for residential and 
            commercial properties throughout Northwest Arkansas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridVariants}
        >
          <div className="lg:col-span-2 mb-8">
            <Accordion.Root
              type="single"
              collapsible
              value={openItem || ''}
              onValueChange={handleAccordionChange}
              className="space-y-4"
            >
              {services.map((service) => (
                <motion.div key={service.id} variants={cardVariants}>
                  <Accordion.Item value={service.id} className="bg-stone-800 rounded-lg overflow-hidden">
                    <Accordion.Header className="w-full">
                      <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left focus:outline-none group">
                        <div>
                          <h3 className="text-xl font-semibold text-stone-50">{service.title}</h3>
                          <p className="text-stone-400 mt-1">{service.short}</p>
                        </div>
                        <ChevronDown 
                          className="text-stone-400 transition-transform duration-300 group-data-[state=open]:rotate-180" 
                          aria-hidden 
                          size={20}
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative h-60 md:h-auto rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-stone-300 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion.Root>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block bg-orange-700 hover:bg-orange-800 text-white py-4 px-8 rounded-md font-semibold transform transition-all duration-300"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



