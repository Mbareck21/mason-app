import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;