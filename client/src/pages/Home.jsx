import React from 'react';
import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import WhyJoin from "../components/Home/WhyJoin"
import CTA from "../components/Home/CTA";
import Footer from "../components/Footer/Footer"


function Home() {
  return (
    <>
      <div className='m-2'>
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