import React from "react";
import Footer from "../components/Footer/Footer"; // Assuming Footer is used here too

const ThankYou = ({ onReset }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <section className="grow flex items-center justify-center py-20 px-5 md:px-10">
        <div className="text-center max-w-xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-2xl border-t-8 border-brand-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-20 h-20 text-brand-secondary mx-auto mb-6 animate-pulse"
          >
            {/* Icon representing a cross or blessing for respect */}
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v4h-4v2h4v4h2v-4h4v-2h-4V7h-2z" />
          </svg>

          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4">
            🙏 Thank You! ተፈጸመ
          </h1>

          <p className="text-xl text-gray-700 mb-6 font-serif">
            መዝሙር 122:1 - "ተፈሣህኩ እስመ ይቤሉኒ ቤተ-እግዚአብሔር ነሐውር::"
          </p>

          <p className="text-lg text-brand-primary/90 leading-relaxed mb-8">
            የበረከት መዝገብ የሆነው ማመልከቻዎ በሰላም ደርሶናል፡፡ የቅዱሳን አባቶቻችን በረከት ከእርስዎ ጋር ይሁን፡፡
            በጥቂት ጊዜ ውስጥ አዘጋጅ ኮሚቴው ያነጋግርዎታል፡፡
          </p>

          <button
            onClick={onReset}
            className="py-3 px-8 mt-4 bg-brand-secondary text-brand-primary font-bold rounded-full shadow-lg hover:bg-brand-secondary/90 transition duration-300 cursor-pointer"
          >
            Go Back to Registration
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
