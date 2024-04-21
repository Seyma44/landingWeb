import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroPage from '../components/HeroPage';
import Companies from '../components/Companies';
import Service from '../components/Service';
import WhyChooseUs from '../components/WhyChooseUs';
import Metrics from '../components/Metrics';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';
import Quotes from '../components/Quotes';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  const scrollRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    Home: useRef<HTMLDivElement>(null),
    'About Us': useRef<HTMLDivElement>(null),
    Features: useRef<HTMLDivElement>(null),
    'Our Works': useRef<HTMLDivElement>(null),
    Pricing: useRef<HTMLDivElement>(null),
    Resources: useRef<HTMLDivElement>(null),
  };

  return (
    <div >
      <Navbar scrollRefs={scrollRefs} />
      <div ref={scrollRefs.Home}>
        <HeroPage />
      </div>
      <div ref={scrollRefs['About Us']}>
        <Companies />
      </div>
      <div ref={scrollRefs.Features}>
        <Service />
      </div>
      <div ref={scrollRefs['Our Works']}>
        <WhyChooseUs />
      </div>
      <div ref={scrollRefs.Pricing}>
        <Metrics />
      </div>
      <div ref={scrollRefs.Resources}>
        <Testimonial />
        <Pricing />
        <Quotes />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
