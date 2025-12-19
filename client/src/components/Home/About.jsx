import React from "react";
import { Book, Bell, Sparkles, Clock } from "lucide-react";

function About() {
  return (
    <>
      <section className="mt-15 py-20 bg-brand-primary text-white flex flex-col md:flex-row md:justify-between md:items-start md:gap-10 px-5">
        {/* About Section */}
        <div className="max-w-[600px] w-full md:w-1/2 mx-auto md:mx-0 text-center md:text-left">
          <h1 className="font-bold inline-block border-b-2 rounded-2xl pb-2 mb-4 text-yellow-400 text-4xl">
            {" "}
            MFM ማኅበረ ዲያቆናት{" "}
          </h1>

          <p className="text-base leading-relaxed space-y-3">
            ✝️ በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን! ✝️
            <br />
            <br />
            ይህ ማኅበር በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ማኅበረ ቅዱሳን የከፍተኛ ትምህርት ተቋማት ግቢ
            ጉባኤ ማደራጃና መምሪያ በሐረር ማዕከል የሜንሽን ግቢ ጉባኤ ስር የተቋቋመ ማኅበረ ዲያቆናት ነው።
            <br />
            <br />
            ማኅበሩ በተለያዩ የሀገራችን ክፍሎች ከመጡ፣ በትምህርት ምክንያት በሐረር ሜንሽን (Menschen für
            Menschen Agro Technical and Technology College) የተማሩ የዲቁና ክህነት ያላቸው
            ወንድሞች በአንድነት ተሰብስበው የመሠረቱት መንፈሳዊ ማኅበር ነው።
          </p>
        </div>

        {/* Purpose / Goals */}
        <div className="max-w-[600px] w-full md:w-1/2 mt-10 md:mt-0 mx-auto md:mx-0">
          <div className="bg-white text-brand-primary rounded-xl shadow-lg p-6">
            <h2 className="font-bold mb-5 text-center text-yellow-400 text-4xl  border-b-2 rounded-2xl pb-2">
              የማኅበሩ ዓላማዎች
            </h2>

            <ul className="space-y-4 text-base">
              <li className="border-b border-gray-200 pb-3 flex gap-3">
                <Book className="w-5 h-5 mt-1" />
                ወንድሞች ዲያቆናት ትምህርታቸውን ከክህነታቸው ጋር በአንድነት እንዲያስኬዱ ማስቻል
              </li>

              <li className="border-b border-gray-200 pb-3 flex gap-3">
                <Sparkles className="w-5 h-5 mt-1" />
                የክህነት ትምህርታቸውንና መንፈሳዊ አገልግሎታቸውን እንዲቀጥሉ ማገዝ
              </li>

              <li className="border-b border-gray-200 pb-3 flex gap-3">
                <Bell className="w-5 h-5 mt-1" />
                የአገልጋይ እጥረት ያለባቸውን አብያተ ክርስቲያናት በአገልግሎት መደገፍ
              </li>

              <li className="border-b border-gray-200 pb-3 flex gap-3">
                <Clock className="w-5 h-5 mt-1" />
                በገጠር እና በርቀት ያሉ አብያተ ክርስቲያናት እንዲከፈቱ እና እንዲጠናከሩ ማስቻል
              </li>

              <li className="flex gap-3">
                <Sparkles className="w-5 h-5 mt-1" />
                ከሐረር ማዕከል ማኅበረ ቅዱሳን ጋር በእውቅናና በሕብረት መስራት
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
