import React from 'react'
import { Book, Bell, Sparkles, Clock } from "lucide-react";

function About() {
  return (
    <>
      <section className="mt-5 py-20 bg-brand-primary text-white flex flex-col justify-center md:flex-row md:justify-between md:items-start md:gap-10 px-5">
        {/**about */}
        <div className="max-w-[600px]  w-full md:w-1/2 md:mx-0 mx-auto text-center ">
          <h1 className="font-bold text-2xl mb-2">
            About College Deacons Fellowship
          </h1>
          <p className="text-base leading-relaxed mt-4">
            This app is created to guide and support deacons in their spiritual
            ministry. It helps you stay organized, learn teachings, and grow in
            your service with devotion and purpose
          </p>
        </div>
        {/**purpose */}
        <div className="max-w-[600px]  w-full md:w-1/2 mt-10 mx-auto md:mx-0 md:mt-0 ">
          <div className="bg-white text-brand-primary   rounded-xl shadow-lg p-6 ">
            <h2 className="font-semibold mb-4 text-xl">Key features</h2>
            <ul className="space-y-4 text-base ">
              <li className="border-b border-gray-200 pb-2 flex items-center gap-3">
                <Book className="w-5 h-5 text-brand-primary" />
                Daily Readings
              </li>
              <li className="border-b border-gray-200 pb-2 flex items-center gap-3">
                <Bell className="w-5 h-5 text-brand-primary" />
                Prayer Reminders
              </li>
              <li className="border-b border-gray-200 pb-2 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                Spiritual Lessons
              </li>
              <li
                className="
              last:border-b-0 pb-2 flex items-center gap-3"
              >
                <Clock className="w-5 h-5 text-brand-primary" />
                Service Schedule
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;