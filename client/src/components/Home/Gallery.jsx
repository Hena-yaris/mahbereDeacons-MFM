
import banner from "../../assets/img/s5.jpeg";
import React from "react";

function Gallery() {
  return (
    <section className="relative w-full h-[350px] md:h-[500px] overflow-hidden mt-10">
      {/* Background image */}
      <img
        src={banner}
        alt="Saint Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Filter */}
      <div className="absolute inset-0  backdrop-blur-sm bg-black/50"></div>

       {/* 3. Text Content (Central Focus) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-5">
        {/* Main Title: Strong text shadow to pop off the dark background */}
        <h2
          className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-snug 
                     drop-shadow-3xl transition duration-500 hover:scale-105" // Increased shadow to drop-shadow-3xl
        >
          በመኑ በአምሳለ መኑ ናስተማስለኪ
        </h2>
        {/* Secondary Text: Gold accent */}
        <p className="mt-4 text-xl md:text-2xl font-semibold text-brand-secondary/90 drop-shadow-xl">
          ሰአሊ ለነ ቅድስት
        </p>
        {/* Subtle separator */}
        <div className="w-16 h-1 bg-brand-secondary my-4 rounded-full"></div>{" "}
        {/* Used gold for separator */}
        <p className="mt-2 text-sm md:text-base text-white/80 max-w-lg">
          "We serve with dedication, guided by faith and wisdom, always seeking
          unity in service."
        </p>
      </div>
    </section>
  );
}

export default Gallery;
