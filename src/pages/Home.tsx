import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Specialties from '../components/Specialties';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Specialties />
      <Testimonials />
    </div>
  );
};

export default Home;