
import React from "react";
import heroImage from "../../assets/img/i1.webp";

export default function Hero() {
  return (
    <div className="relative">

      {/* 1. SLIDE BAR */}
      <div
        className="
          absolute top-0 left-0 right-0 z-20 
          bg-brand-secondary text-brand-primary 
          py-2 font-semibold flex flex-col items-center justify-center 
          shadow-lg
        "
      >
        <p className="text-sm md:text-base border-b-2 border-brand-primary/50">
          ✨ **በስመ አብ ወወልድ ወመንፈስቅዱስ አሃዱ አምላክ አሜን**
        </p>
        <p className="text-sm md:text-base pt-1">
          **ኦ ማርያም በእንተዝ ናፈቅረኪ ወነአብየኪ**
        </p>
      </div>

      {/* 2. HERO SECTION */}
      <section
        className="
          h-[85vh] text-white pt-20 
          
          bg-cover bg-center 
          
          
          bg-brand-primary/90 bg-blend-darken 
          
          flex flex-col justify-center items-center md:items-start md:px-10 
        "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* 3. TEXT DIV */}
        <div
          className="
            md:text-left text-center 
            backdrop-blur-sm bg-black/10 
            p-6 rounded-lg 
            shadow-2xl shadow-black/50 
          "
        >
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight leading-tight">
            MFM ማህበረ ዲያቆናት{" "}
          </h1>
          <p className="text-xl mt-4 mb-8 font-light max-w-lg">
            Growing in faith, serving with purpose, and leading with love.
          </p>

          {/* 4. CTA BUTTON */}
          <a
            href="#"
            className="
              text-brand-primary font-bold rounded-full bg-brand-secondary 
              px-8 py-4 shadow-xl transition duration-300 
              hover:bg-white hover:scale-[1.02] hover:shadow-2xl 
            "
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}