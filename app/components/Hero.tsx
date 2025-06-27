
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Expert Stone Masonry and Custom Stonework
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-200">
          Crafting beautiful and durable stone features for your home.
        </p>
        <Link href="#contact" className="mt-8 inline-block bg-orange-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-orange-800 transition-colors">
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
};

export default Hero;
