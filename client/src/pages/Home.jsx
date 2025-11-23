import React from 'react';
import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import WhyJoin from "../components/Home/WhyJoin"
import CTA from "../components/Home/CTA";
import Footer from "../components/Footer/Footer"


function Home() {
  return (
    <>
      <div className='m-2 bg-brand-neutral'>
        <Hero />
        <About />
        <WhyJoin />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default Home