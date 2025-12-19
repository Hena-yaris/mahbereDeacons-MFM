import React from "react";
import { Facebook, Instagram, Mail, Phone, HeartHandshake } from "lucide-react"; // Imported HeartHandshake for a spiritual icon

function Footer() {
  return (
    // 1. Footer Container: Added subtle shadow for lift and increased padding
    <footer className="bg-brand-primary text-white py-16 shadow-inner">
      <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
        {" "}
        {/* ⬅️ Changed to 4 columns for balance */}
        {/* Logo + description */}
        <div className="col-span-1 md:col-span-2">
          {" "}
          {/* ⬅️ Made this column span 2 for prominence */}
          <h2 className="text-3xl font-extrabold flex items-center gap-2 text-brand-secondary">
            {" "}
            {/* ⬅️ Gold accent on Title */}
            <HeartHandshake className="w-8 h-8" /> MFM ማህበረ ዲያቆናት
          </h2>
          <p className="text-white/70 mt-4 text-sm max-w-sm">
            Serving with purpose, unity, and spiritual devotion, guided by the
            holy word.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-brand-secondary/50 pb-2">
            Quick Links
          </h3>{" "}
          {/* ⬅️ Gold underline */}
          <ul className="space-y-3 text-white/80">
            {/* Added transition and stronger hover effect */}
            <li className="hover:text-brand-secondary cursor-pointer transition duration-200">
              About Us
            </li>
            <li className="hover:text-brand-secondary cursor-pointer transition duration-200">
              Gallery
            </li>
            <li className="hover:text-brand-secondary cursor-pointer transition duration-200">
              Register
            </li>
            <li className="hover:text-brand-secondary cursor-pointer transition duration-200">
              Contact
            </li>
          </ul>
        </div>
        {/* Contact & Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-brand-secondary/50 pb-2">
            Connect
          </h3>{" "}
          {/* ⬅️ Changed title and added gold underline */}
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-secondary" /> +251 932096925/0901555818
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-secondary" />{" "}
              mfmmahbereDeacons@gmail.com
            </li>
          </ul>
          {/* 2. Social Media Icons (Prominent) */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-brand-secondary hover:text-white transition duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-brand-secondary hover:text-white transition duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Mail"
              className="text-brand-secondary hover:text-white transition duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line (Enhanced Separator) */}
      <div className="text-center text-white/60 text-sm mt-12 border-t border-white/30 pt-6">
        © 2018 MFM ማህበረ ዲያቆናት. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
