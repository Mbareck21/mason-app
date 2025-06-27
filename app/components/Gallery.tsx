import Image from 'next/image';
import fireplace from "@/public/fireplace.jpg"
import stoneWall from "@/public/stoneWall.jpg"
import stoneStairs from "@/public/stoneStairs.jpg"
import stonePathway from "@/public/pathway.jpg"
import stonePathwayTwo from "@/public/pathwayTwo.jpg"
import example from "@/public/example.jpg"
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src={fireplace} alt="Fireplace stonework project" width={400} height={300}  className="w-full h-full" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src={stoneWall} alt="Custom Stone Wall project" width={400} height={300} className="w-full h-full" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src={stoneStairs} alt="Custom Stone Stairs project" width={400} height={300} className="w-full h-full"  />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src={stonePathway} alt="Custom Stone pathway project" width={400} height={300} className="w-full h-full" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
          <Image src={stonePathwayTwo} alt="Fireplace stonework project" width={400} height={300}  className="w-full h-full" />
          </div>
          <div className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <Image src={example} alt="Custom stonework project" width={400} height={300} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;