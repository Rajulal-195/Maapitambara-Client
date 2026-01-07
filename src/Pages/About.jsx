// import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import { CheckCircle, Star, HeartHandshake, Shield } from "lucide-react";
// import Intro from "../Component/Intro";

// export default function About() {
//   return (
//     <>
//     <Header/>
    
    
//     <section className="bg-gradient-to-b from-yellow-50 to-yellow-100 py-20 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
//             About Maa Baglamukhi Mandir, Nalkheda
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
//             Maa Baglamukhi Mandir, situated on the banks of the Lakhundar river
//             in Nalkheda (Madhya Pradesh), is a divine center of faith, energy,
//             and spiritual strength. Dedicated to Goddess Baglamukhi, this sacred
//             temple is revered for granting victory, removing obstacles, and
//             blessing devotees with success, prosperity, and protection.
//           </p>
//         </div>

//         {/* Mission Section */}
//         <div className="bg-white shadow-lg rounded-2xl p-8 mb-16">
//           <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
//             Our Mission
//           </h3>
//           <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
//             <li className="flex items-start space-x-3">
//               <CheckCircle className="text-red-600 w-6 h-6 mt-1" />
//               <span>Uphold the purity of Sanatan Vedic traditions.</span>
//             </li>
//             <li className="flex items-start space-x-3">
//               <CheckCircle className="text-red-600 w-6 h-6 mt-1" />
//               <span>Offer personalized rituals for health, wealth, and protection.</span>
//             </li>
//             <li className="flex items-start space-x-3">
//               <CheckCircle className="text-red-600 w-6 h-6 mt-1" />
//               <span>Create a sacred environment for peace & divine blessings.</span>
//             </li>
//           </ul>
//         </div>

//         {/* Rituals Section */}
//         <div className="mb-16">
//           <h3 className="text-3xl font-bold text-red-600 mb-8 text-center">
//             Guided Rituals & Services
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               "Havan & Yagna (Fire offerings)",
//               "Anushthans for protection & prosperity",
//               "Specialized pujas for Dosha Nivaran",
//               "Personal spiritual consultations",
//             ].map((ritual, i) => (
//               <div
//                 key={i}
//                 className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
//               >
//                 <p className="text-gray-800 font-medium">{ritual}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Trust Section */}
//         <div className="bg-white rounded-2xl shadow-lg p-10">
//           <h3 className="text-3xl font-bold text-red-700 mb-8 text-center">
//             Why Devotees Trust Us
//           </h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="flex items-start space-x-4">
//               <Star className="w-7 h-7 text-red-600" />
//               <p className="text-gray-700">
//                 Generations of priestly service dedicated to Maa Baglamukhi.
//               </p>
//             </div>
//             <div className="flex items-start space-x-4">
//               <Shield className="w-7 h-7 text-red-600" />
//               <p className="text-gray-700">
//                 Authentic Vedic rituals ensuring highest spiritual efficacy.
//               </p>
//             </div>
//             <div className="flex items-start space-x-4">
//               <HeartHandshake className="w-7 h-7 text-red-600" />
//               <p className="text-gray-700">
//                 Personalized support for devotees’ unique needs.
//               </p>
//             </div>
//             <div className="flex items-start space-x-4">
//               <CheckCircle className="w-7 h-7 text-red-600" />
//               <p className="text-gray-700">
//                 A sanctuary fostering peace, positivity, and divine energy.
//               </p>
//             </div>
//           </div>
//         </div>
// <Intro/>
//         {/* Closing Note */}
//         <div className="text-center mt-16">
//           <p className="text-xl font-semibold text-red-700 leading-relaxed">
//             🙏 We welcome all devotees seeking Maa Baglamukhi’s divine grace for
//             victory, prosperity, and spiritual fulfillment.
//           </p>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     </>
//   );
// }


import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { CheckCircle, Star, HeartHandshake, Shield } from "lucide-react";
import Intro from "../Component/Intro";

export default function About() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-yellow-50 to-yellow-100 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-red-700 tracking-tight drop-shadow-sm mb-6">
              About Maa Baglamukhi Mandir, Nalkheda
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Maa Baglamukhi Mandir, situated on the peaceful banks of the Lakhundar river
              in Nalkheda (Madhya Pradesh), is a divine seat of energy, devotion, and
              spiritual awakening. Devotees from all over the nation seek the blessings
              of Maa Baglamukhi for protection, victory, and prosperity.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white/90 shadow-xl rounded-3xl p-10 md:p-14 mb-20 border border-yellow-200">
            <h3 className="text-3xl font-bold text-red-700 text-center mb-10">
              Our Mission
            </h3>
            <ul className="grid md:grid-cols-3 gap-8 text-gray-700 text-lg">
              <li className="flex items-start space-x-4">
                <CheckCircle className="text-red-600 w-7 h-7 mt-1" />
                <span>Uphold the purity of Sanatan Vedic traditions.</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckCircle className="text-red-600 w-7 h-7 mt-1" />
                <span>
                  Offer personalized rituals for health, wealth, and protection.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckCircle className="text-red-600 w-7 h-7 mt-1" />
                <span>
                  Create a peaceful environment filled with divine blessings.
                </span>
              </li>
            </ul>
          </div>

          {/* Rituals Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-red-700 text-center mb-12">
              Guided Rituals & Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Havan & Yagna (Fire offerings)",
                "Anushthans for protection & prosperity",
                "Specialized pujas for Dosha Nivaran",
                "Personal spiritual consultations",
              ].map((ritual, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md border border-yellow-200 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-gray-800 font-semibold text-lg">
                    {ritual}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-white shadow-xl rounded-3xl p-12 md:p-16 border border-yellow-200 mb-20">
            <h3 className="text-3xl font-bold text-red-700 text-center mb-12">
              Why Devotees Trust Us
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex items-start space-x-4">
                <Star className="w-8 h-8 text-red-600" />
                <p className="text-gray-700 text-lg">
                  Generations of priestly service dedicated to Maa Baglamukhi.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-red-600" />
                <p className="text-gray-700 text-lg">
                  Authentic Vedic rituals ensuring highest spiritual efficacy.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <HeartHandshake className="w-8 h-8 text-red-600" />
                <p className="text-gray-700 text-lg">
                  Personalized support for devotees’ unique spiritual needs.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
                <p className="text-gray-700 text-lg">
                  A sanctuary fostering peace, positivity, and divine energy.
                </p>
              </div>
            </div>
          </div>

          {/* Guru Section */}
          <Intro />

          {/* Closing Note */}
          <div className="text-center mt-20">
            <p className="text-2xl font-semibold text-red-700 leading-relaxed max-w-3xl mx-auto">
              🙏 We welcome all devotees seeking Maa Baglamukhi’s divine grace
              for victory, prosperity, and spiritual fulfillment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
