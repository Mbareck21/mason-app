const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">Stone Installations</h3>
            <p className="text-slate-600">We specialize in custom stone installations, including patios, walkways, fireplaces, retaining walls, and veneers. Our expert team uses high-quality materials to create stunning and durable outdoor and indoor living spaces.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">Masonry Repairs</h3>
            <p className="text-slate-600">Our masonry repair services can restore the beauty and integrity of your existing stonework. We handle everything from minor cracks to major restorations, ensuring your investment lasts for years to come.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;