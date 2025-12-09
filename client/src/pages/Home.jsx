import React from 'react';
import Hero from "../components/Home/Hero"
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery"
import CTA from "../components/Home/CTA";
import Footer from "../components/Footer/Footer"
import SaintsGallery from '../components/Home/SaintsGallery';


function Home() {
  return (
    <>
      <div className='m-2'>
        <Hero />
        <About />
        <Gallery/>
        <SaintsGallery/>
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default Home