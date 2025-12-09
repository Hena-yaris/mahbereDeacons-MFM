
import React from "react";

// --- Quotes and Image Imports ---
const deac =
  "❝ ... ኦ አኃውየ ኢታፍቅርዎ ለዓለም ወኢዘሀሎ ውስተ ዓለም። ዓለሙኒ ኃላፊ፥ ፍትወቱኒ ኃላፊ፥ እስመ ኵሉ ኃላፊ ውእቱ!❞ ❝ወንድሞቼ ሆይ ይህን ዓለም አትውደዱት። በዓለሙ ያለውን መብል መጠጥን አትውደዱ። ዓለሙ ኃላፊ ነው። መብል መጠጡም ኃላፊ ነው። ሁሉም ኃላፊ ነውና።❞";

import saint1 from "../../assets/img/saints/saint1.jpg";
import saint2 from "../../assets/img/saints/saint2.jpg";
import saint3 from "../../assets/img/saints/saint3.jpg";
import saint4 from "../../assets/img/saints/saint4.jpg";
import saint5 from "../../assets/img/saints/saint5.jpg";
import saint6 from "../../assets/img/saints/saint6.jpg";
import saint7 from "../../assets/img/saints/saint7.jpg";
import saint9 from "../../assets/img/saints/saint9.jpg";
import saint10 from "../../assets/img/saints/saint10.jpg";
import saint11 from "../../assets/img/saints/saint11.jpg";
import saint12 from "../../assets/img/saints/saint12.jpg";
import saint14 from "../../assets/img/saints/saint14.jpg";

const saints = [
  {
    img: saint9,
    quote:
      "❝አሐዱ አብ ቅዱስ አሐዱ ወልድ ቅዱስ አሐዱ ውእቱ መንፈስ ቅዱስ — አንዱ አብ ቅዱስ ነው፤ አንዱ ወልድ ቅዱስ ነው፤ አንዱ መንፈስ ቅዱስ ቅዱስ ነው❞",
    author: "አቡነ ተክለ ሃይማኖት",
  },
  {
    img: saint1,
    quote: "❝ኵሎሙ ሰራዊተ መላእክት ይሴብሑኪ፤ ለዘእምቅድመ ዓለም ሀልዎትኪ፤ ለማኅደረ ወልዱ እግዚአብሔር ኀረየኪ❞ ",
    author: "— መጽሐፈ ሰዓታት (ኵሎሙ ዘእግዝእትነ ማርያም)",
  },
  {
    img: saint12,
    quote:
      "❝ክርስቶስ አንተ የእግዚአብሔር ልጅ ነህ❞-ስላለው ❝ብፁዕ ነህ❞ ከተባለና የመንግሥተ ሰማያት ቁልፍ ከተሰጠው (ማቴ. ፲፮፥፲፮-፲፱) እርሷማ ከሁሉም ይልቅ እንዴት ብፅዕት አትሆን? (ሉቃ. ፩፥፵፭)  ",
    author: "ጴጥሮስ፡- ",
  },
  {
    img: saint3,
    quote: "❝ሐነጸ መቅደሶ በአርያም — መቅደሱን እንደ አርያም ሠራ፥ ለዘላለምም በምድር ውስጥ መሠረታት❞",
    author: "ልበ አምላክ ቅዱስ ዳዊት በመዝ. ፸፰፥፷፱",
  },

  {
    img: saint4,
    quote:
      "❝እውነተኛ የወይን ግንድ እኔ ነኝ እናንተ ቅርንጫፎች ናችሁ፡፡ በእኔ ኑሩ በእኔ ባትኖሩ ማፍራት አትችሉም::❞ ",
    author: "— ማቴ. ፫፥፰-፲፪ ",
  },
 
  {
    img: saint7,
    quote:
      "❝እንዘ ተሐቅፊዮ ለሕፃንኪ ጽጌ ፀዓዳ ወቀይሕ፤ አመ ቤተ መቅደስ ቦእኪ በዕለተ ተአምር ወንጽሕ፤ ንዒ ርግብየ ትናዝዝኒ እምላሕ፤ ወንዒ ሠናይትየ ምስለ ገብርኤል ፍሡሕ፤ ወሚካኤል ከማኪ ርኅሩኅ — ነጭና ቀይ መልክ ያለው አበባ ልጅሽን ይዘሽ ወደ ቤተ መቅደስ እንደ ዕለተ ንጽሕ ተብሎ በሙሴ እንደተጻፈው በወለድሽ በ፱ ቀን ወደ ቤተ መቅደስ እንደ ገባሽ ርግቤ ሆይ! ከኀዘን ታረጋጊኝ ዘንድ ነዪ! አዛኝቱ ድንግል ሆይ! ደስተኛ ከሆነው አገብርኤልና እንደ አንቺ ርኅሩኅ ከሆነው ከቅዱስ ሚካኤል ጋር ነይ::❞",
    author: "ሊቁ:- ",
  },
  {
    img: saint6,
    quote:
      " ❝አዘክሪ ድንግል ንግደቶ ዘምስሌኪ እንዘ ትጉዪይ ምስሌሁ እምሀገር ለሀገር በመዋዕለ ሄሮድስ ርጉም አዘክሪ ድንግል አንብአ መሪረ ዘውኅዘ እምአዕይንትኪ ወወረደ ዲበ ገጸ ፍቁር ወልድኪ — ድንግል ሆይ ርጉም ሄሮድስ በነገሠበት ወራት ከእሱ ጋራ ካንዱ ሀገር ወደ አንዱ ሀገር የተሰደደሽውን መሰደድ አሳስቢ! ድንግል ሆይ ከዐይንሽ የፈሰሰውን በልጅሽ ፊት የወረደውን ቁጡ ዕንባ አሳስቢ አሳስበሽም ዋጋቸውን አሰጪ❞",
    author: "አባ ሕርያቆስ በቅዳሴው:- ",
  },
  {
    img: saint5,
    quote:
      "❝ኢየሐፍር ቀዊመ ቅድመ ሥዕልኪ ወርኃ ጽጌ ረዳ አመ ኀልቀ፤ ዘኢየሐልቅ ስብሐተኪ እንዘ እሴብሐኪ ጥቀ፤ ተአምርኪ ማርያም ከመ አጠየቀ፤ ጸውዖ ስምኪ ያነሥእ ዘወድቀ፣ ኀጥአኒ ይረሲ ጻድቀ — ማርያም ሆይ የጽጌ ረዳ አበባ ወራት ባለፈ ጊዜ የማያልቅ ምስጋናሽን እያመሰገንኩ ከሥዕልሽ ፊት ለመቆም አላፍርም። እመቤቴ ማርያም ሆይ ተአምርሽ እንደሚያስረዳው ስምሽን መጥራት የወደቀውን ያስነሣል፤ ኀጥኡንም ጻድቅ ያደርጋል::❞ ",
    author: "ማኅሌተ ጽጌ-አባ ጽጌ ድንግል",
  },
  {
    img: saint10,
    quote: "ለሥዕለ አድኅኖ ሥዕልኪ ዘአስተቄጸሎ አፉየ ጽጌረዳ ስብሐት ንሥኢ፤ ማርያም ቅድሜየ ዘካርያስ ከመ እርእየ",
    author: "ኢትዮጵያዊው ሊቅ አባ ጊዮርጊስ ዘጋስጫ",
  },
  {
    img: saint11,
    quote: "❝ወእሙሰ ተአቅብ ዘንተ ኲሎ ነገረ ውስተ ልባ — እናቱም ይህን ነገር ሁሉ በልቧ ትጠብቀው ነበር❞ ",
    author: " — ሉቃ ፪፥፶፩ ",
  },
  {
    img: saint14,
    quote:
      "❝ኦ አእዳው እለ ለሐኳሁ ለአዳም ተቀነዋ በቅንዋተ መስቀል፤ ኦ አእጋር እለ አንሶሰዋ ውስተ ገነት ተቀነዋ በቅንዋተ መስቀል — አዳምን የፈጠሩ እጆች በመስቀል ቀኖት ተቸነከሩ ወዮ! በገነት የተመላለሱ እግሮች በመስቀል ቀኖት ተቸነከሩ ወዮ!❞ ",
    author: "ቅዳሴ ዘዮሐንስ አፈወርቅ",
  },
  {
    img: saint2,
    quote:
      "❝ ... ወነካር ይእቲ ለአዕይንቲነ — ለዐይናችንም ድንቅ ናት❞...❝ትመስሊ ፊደለ ወትወልዲ ወንጌለ ወታገምሪ መስቀለ — ፊደልን ትመስያለሽ፣ ወንጌልን ትወልጃለሽ፣ መስቀልን ትወስኛለሽ❞",
    author: " — መዝ. ፻፲፰፥፳፫--አባ ጊዮርጊስ:-",
  },
];

const SaintsGallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* --- Main Header --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl lg:text-6xl tracking-tight">
          Holy Quotes and Saints
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
          Inspiring words from the Holy Fathers and Scripture.
        </p>
      </div>

      {/* Featured Quote Section - Prominent Block */}
      <div className="max-w-4xl mx-auto bg-blue-100 border-l-4 border-blue-600 p-6 shadow-xl rounded-lg mb-12">
        <p className="text-2xl italic font-serif text-blue-800 leading-relaxed">
          {deac}
        </p>
        <p className="mt-4 text-right text-lg font-semibold text-blue-900">
          — ቃለ መምሕር
        </p>
      </div>

      {/* --- Gallery Grid (Now Masonry Layout) --- */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 
                   space-y-8"
        style={{ columnBreakInside: "avoid" }} // Added for better column flow
      >
        {saints.map((s, i) => (
          <div
            key={i}
            // The item must be 'inline-block' or 'block' to flow correctly in columns
            className="block w-full bg-white shadow-2xl rounded-2xl overflow-hidden 
                       transform transition duration-500 hover:scale-[1.03] hover:shadow-blue-300/50"
            // Important: Added print styles to prevent item splitting across columns
            style={{ breakInside: "avoid-column" }}
          >
            {/* Image */}
            <img
              src={s.img}
              alt={`Saint ${i + 1}`}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              {/* Quote */}
              <p className="mt-2 text-xl font-medium text-gray-800 italic leading-relaxed">
                {s.quote}
              </p>

              {/* Author/Source */}
              <span className="mt-4 inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider border-t border-gray-200 pt-3">
                {s.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaintsGallery;