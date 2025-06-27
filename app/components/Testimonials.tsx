const Testimonials = () => {
  const testimonials = [
    {
      quote: "The attention to detail and quality of work was outstanding. Our new patio is the envy of the neighborhood!",
      name: "A. Smith",
      city: "Pleasantville"
    },
    {
      quote: "From start to finish, the team was professional, communicative, and completed the project on time. Highly recommended!",
      name: "J. Doe",
      city: "Springfield"
    },
    {
      quote: "We had a vision for our fireplace, and they brought it to life perfectly. The craftsmanship is top-notch.",
      name: "M. Williams",
      city: "Greenwood"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
              <svg className="absolute top-0 left-0 w-16 h-16 text-slate-100 transform -translate-x-2 -translate-y-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 8h-2.667c-1.473 0-2.667 1.193-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333v-8c0-4.418-3.582-8-8-8zm16 0h-2.667c-1.473 0-2.667 1.193-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333v-8c0-4.418-3.582-8-8-8z" />
              </svg>
              <p className="relative text-slate-600 italic z-10">"{testimonial.quote}"</p>
              <p className="relative text-right text-slate-800 font-semibold mt-4 z-10">- {testimonial.name}, {testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
