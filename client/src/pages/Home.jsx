import React from 'react';
import Hero from "../components/Home/Hero"
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery"
import CTA from "../components/Home/CTA";
import Footer from "../components/Footer/Footer"


function Home() {
  return (
    <>
      <div className='m-2'>
        <Hero />
        <About />
        <Gallery/>
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default Home