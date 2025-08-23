import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import BookingProcess from './components/BookingProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <BookingProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;