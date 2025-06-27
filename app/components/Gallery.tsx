import Image from 'next/image';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src="https://placehold.co/400x300" alt="Custom stonework project 1" width={400} height={300} className="w-full h-auto" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src="https://placehold.co/400x300" alt="Custom stonework project 2" width={400} height={300} className="w-full h-auto" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src="https://placehold.co/400x300" alt="Custom stonework project 3" width={400} height={300} className="w-full h-auto"  />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src="https://placehold.co/400x300" alt="Custom stonework project 4" width={400} height={300} className="w-full h-auto" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src="https://placehold.co/400x300" alt="Custom stonework project 5" width={400} height={300} className="w-full h-auto" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src="https://placehold.co/400x300" alt="Custom stonework project 6" width={400} height={300} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;