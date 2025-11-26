import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <div className="mt-16 py-20 px-5 bg-gradient-to-b from-gray-100 to-gray-200">
      <div
        className="max-w-xl mx-auto text-center p-10 rounded-3xl bg-white shadow-xl 
        border border-gray-100 relative overflow-hidden"
      >
        {/* Soft glow layer */}
        <div className="absolute inset-0 bg-brand-primary/30 blur-2xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative">
          <h2 className="text-3xl font-bold text-brand-primary">
            Join the Fellowship Today
          </h2>

          <p className="text-brand-primary/70 mt-3">
            Become part of our spiritual community. Grow with us in faith,
            unity, and love.
          </p>

          <Link 
          to={"/register"}
            className="mt-6 inline-flex items-center gap-2 px-7 py-4 rounded-full 
            bg-brand-secondary text-brand-primary text-xl font-semibold 
            shadow-lg hover:shadow-xl transition-all duration-300 
            hover:scale-[1.06] focus:ring-4 focus:ring-brand-secondary/40"
          >
            Register and Join
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTA;
