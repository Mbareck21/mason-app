const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" className="block w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="block w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
              <textarea id="message" rows={4} className="block w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-orange-700 text-white py-3 px-8 rounded-md font-semibold hover:bg-orange-800 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;