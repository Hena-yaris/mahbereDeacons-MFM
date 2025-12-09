// import React, { useState } from "react";
// import Footer from "../components/Footer/Footer";
// import MultiSelect from "../components/MultiSelect";
// import axios from "axios"

// // Accordion Section Component (Styled for Premium Look)
// function AccordionSection({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);


//   return (
    
//     <div className="bg-white rounded-xl shadow-md p-5 mb-4 border-l-4 border-brand-secondary transition duration-300 hover:shadow-lg">
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between items-center text-left font-bold text-brand-primary text-xl focus:outline-none cursor-pointer" 
//       >
//         {title}
//         {/* Chevron icon using brand-secondary */}
//         <span
//           className={`transform transition-transform duration-300 text-brand-secondary ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </span>
//       </button>

//       {/* Added transition to the content area */}
//       {isOpen && (
//         <div className="mt-4 transition-all duration-500 ease-in-out">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// function Registration() {
//     // const [age, setAge] = useState([]);
//     const [kutrNbab, setKutrNbab] = useState([]);
//     const [dawitNban, setDawitNbab] = useState([]);
//     const [zema, setZema] = useState([]);



//   return (
//     <div>
//       <section className="min-h-screen bg-gray-100 py-20 px-5 md:px-10">
//         {/* Hero Header */}
//         <div className="text-center px-5 mb-16 shadow-lg bg-white/90 py-8 rounded-2xl max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">
//             ተፈሳህኩ እስመ ይቤሉኒ ቤተእግዚአብሄር ነሃውር፡፡
//           </h1>
//           <p className="text-lg text-brand-primary/80 md:text-xl mt-3 font-medium">
//             Grow in faith, unity, and service.
//           </p>
//         </div>

//         {/* Registration Form */}
//         <form className="max-w-lg mx-auto">
//           {/* Form Title  */}
//           <h2
//             className="
//               flex items-center justify-between gap-3 
//               text-2xl md:text-3xl font-bold 
//               text-brand-primary 
//               bg-white 
//               px-5 py-3 
//               rounded-xl 
//               border-l-8 border-brand-secondary 
//               shadow-lg mb-6 
//             "
//           >
//             {/* Ethiopian Orthodox Cross */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-7 h-7 text-brand-secondary"
//             >
//               <path d="M12 2L9.5 5H11v4H7V7.5L4 10l3 2.5V11h4v4H9.5L12 18l2.5-3H13v-4h4v1.5L20 10l-3-2.5V9h-4V5h1.5L12 2z" />
//             </svg>
//             Fullfill All This Information
//             {/* Ethiopian Orthodox Cross */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-7 h-7 text-brand-secondary"
//             >
//               <path d="M12 2L9.5 5H11v4H7V7.5L4 10l3 2.5V11h4v4H9.5L12 18l2.5-3H13v-4h4v1.5L20 10l-3-2.5V9h-4V5h1.5L12 2z" />
//             </svg>
//           </h2>

//           {/* Personal Info */}
//           <AccordionSection title="Personal Information">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary mb-3 transition duration-200"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary mb-3 transition duration-200"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition duration-200"
//             />
//           </AccordionSection>

//           {/* School */}
//           <AccordionSection title="College Info">
//             <input
//               type="text"
//               placeholder="Department"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary mb-3 transition duration-200"
//             />
//             <input
//               type="number"
//               placeholder="Year"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition duration-200"
//             />
//           </AccordionSection>

//           {/* Spiritual Knowledge / Skills Section */}
//           <AccordionSection title="Spiritual Knowledge / Skills">
//             <MultiSelect
//               label="ቁጥር ንባብ"
//               options={["ውዳሴ ማርያም", "አንቀጸ ብርሃን", "መልክአ ማርያም", "መልክአ ኢየሱስ"]}
//               selected={kutrNbab}
//               setSelected={setKutrNbab}
//             />
//             <MultiSelect
//               label="ንባብ"
//               options={["መዝሙረ ዳዊት", "ወንጌል"]}
//               selected={dawitNban}
//               setSelected={setDawitNbab}
//             />
//             <MultiSelect
//               label="ዜማ"
//               options={[
//                 "ውዳሴ ማርያም",
//                 "ቅዳሴ/ግብረ ዲቁና",
//                 "ሰአታት",
//                 "ክስተት",
//                 "አርያም",
//                 "ጾመ ድጓ",
//                 "መልክአ መልክ",
//               ]}
//               selected={zema}
//               setSelected={setZema}
//             />
//           </AccordionSection>

//           {/* Optional Open Text */}
//           <AccordionSection title="ከ ዳዊት መዝሙር ውስጥ የምትወደው">
//             <textarea
//               placeholder="Write here..."
//               rows={4}
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition duration-200"
//             />
//           </AccordionSection>

//           {/* Submit Button (Stronger Shadow and Clear CTA) */}
//           <button
//             type="submit"
//             className="w-full py-4 mt-6 bg-brand-secondary text-brand-primary font-extrabold text-xl rounded-full shadow-2xl hover:scale-[1.02] transition duration-300" // Stronger button
//           >
//             Submit Application
//           </button>
//         </form>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Registration;


import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import MultiSelect from "../components/MultiSelect";

// Accordion Section Component
function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-4 border-l-4 border-brand-secondary transition duration-300 hover:shadow-lg">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-brand-primary text-xl focus:outline-none cursor-pointer"
      >
        {title}
        <span
          className={`transform transition-transform duration-300 text-brand-secondary ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 transition-all duration-500 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
}

function Registration() {
  // Personal Info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // College Info
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  // MultiSelect Values
  const [kutrNbab, setKutrNbab] = useState([]);
  const [dawitNban, setDawitNbab] = useState([]);
  const [zema, setZema] = useState([]);

  // Textarea
  const [favoritePsalm, setFavoritePsalm] = useState("");

  // Submit Handler (Axios)
  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      fullName,
      email,
      phone,
      department,
      year,
      kutrNbab,
      dawitNban,
      zema,
      favoritePsalm,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        payload
      );
      alert("Registration Successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div>
      <section className="min-h-screen bg-gray-100 py-20 px-5 md:px-10">
        {/* Hero Header */}
        <div className="text-center px-5 mb-16 shadow-lg bg-white/90 py-8 rounded-2xl max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary">
            ተፈሣህኩ እስመ ይቤሉኒ ቤተ-<span className="text-red-500">-እግዚአብሔር</span> ነሐውር፡፡
          </h1>
          <p className="text-lg text-brand-primary/80 md:text-xl mt-3 font-medium">
            {/* Grow in faith, unity, and service. */}
            ኢትዝክር ለነ አበሳነ ዘትካት ፣ ፍጡነ ይርከበነ ሣህልከ እግዚኦ ፣ እስመ ተመንደብነ ፈድፋደ።
          </p>
        </div>

        {/* Registration Form */}
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          {/* Form Title */}
          <h2 className="flex items-center justify-between gap-3 text-2xl md:text-3xl font-bold text-brand-primary bg-white px-5 py-3 rounded-xl border-l-8 border-brand-secondary shadow-lg mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-brand-secondary"
            >
              <path d="M12 2L9.5 5H11v4H7V7.5L4 10l3 2.5V11h4v4H9.5L12 18l2.5-3H13v-4h4v1.5L20 10l-3-2.5V9h-4V5h1.5L12 2z" />
            </svg>
            Fullfill All This Information
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-brand-secondary"
            >
              <path d="M12 2L9.5 5H11v4H7V7.5L4 10l3 2.5V11h4v4H9.5L12 18l2.5-3H13v-4h4v1.5L20 10l-3-2.5V9h-4V5h1.5L12 2z" />
            </svg>
          </h2>

          {/* Personal Info */}
          <AccordionSection title="Personal Information">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-3"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </AccordionSection>

          {/* College Info */}
          <AccordionSection title="College Info">
            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-3"
            />
            <input
              type="number"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </AccordionSection>

          {/* Skills */}
          <AccordionSection title="Spiritual Knowledge / Skills">
            <MultiSelect
              label="ቁጥር ንባብ"
              options={["ውዳሴ ማርያም", "አንቀጸ ብርሃን", "መልክአ ማርያም", "መልክአ ኢየሱስ"]}
              selected={kutrNbab}
              setSelected={setKutrNbab}
            />

            <MultiSelect
              label="ንባብ"
              options={["መዝሙረ ዳዊት", "ወንጌል"]}
              selected={dawitNban}
              setSelected={setDawitNbab}
            />

            <MultiSelect
              label="ዜማ"
              options={[
                "ውዳሴ ማርያም",
                "ቅዳሴ/ግብረ ዲቁና",
                "ሰአታት",
                "ክስተት",
                "አርያም",
                "ጾመ ድጓ",
                "መልክአ መልክ",
              ]}
              selected={zema}
              setSelected={setZema}
            />
          </AccordionSection>

          {/* Psalm Text */}
          <AccordionSection title="ከ ዳዊት መዝሙር ውስጥ የምትወደው">
            <textarea
              placeholder="Write here..."
              rows={4}
              value={favoritePsalm}
              onChange={(e) => setFavoritePsalm(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </AccordionSection>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 mt-6 bg-brand-secondary text-brand-primary font-extrabold text-xl rounded-full shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Registration;


