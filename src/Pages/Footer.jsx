// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//   <footer className="bg-gradient-to-b from-[#3A0202] via-[#8B1E24] to-[#210033] text-[#FDE68A] py-6 px-6">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

//     {/* About Section */}
//     <div>
//       <h3 className="text-2xl font-bold text-[#FFD95A]">Maa Pitambara</h3>
//       <p className="mt-4 leading-relaxed">
//         Maa Pitambara Mandir, Nalkheda is a sacred seat of divine Shakti. Guided by
//         authentic Vedic rituals, thousands visit seeking blessings for protection,
//         prosperity, and spiritual awakening.
//       </p>

//       {/* Social Icons */}
//       <div className="flex space-x-5 mt-6 text-[#FDE68A]">
//         <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://www.facebook.com/profile.php?id=61584669398940"><i className="fab fa-facebook text-2xl"></i></a>
//         <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://www.instagram.com/pitabmera/"><i className="fab fa-instagram text-2xl"></i></a>
//         <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://x.com/Maa_Pitambara03"><i className="fab fa-twitter text-2xl"></i></a>
//         <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://www.youtube.com/channel/UCJM7Vtl9N_ynJQTO2GjjBbw" ><i className="fab fa-youtube text-2xl"></i></a>
//         <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://wa.me/918871101043" ><i className="fab fa-whatsapp text-2xl"></i></a>
//       </div>
//     </div>

//     {/* Quick Links */}
//     <div>
//       <h3 className="text-xl font-semibold text-[#FFD95A]">Quick Links</h3>
//       <ul className="mt-4 space-y-2">
//         <li><a className="hover:text-[#FFEEA9]">Home</a></li>
//         <li><a className="hover:text-[#FFEEA9]">About</a></li>
//         <li><a className="hover:text-[#FFEEA9]">Pujan</a></li>
//         <li><a className="hover:text-[#FFEEA9]">Contact</a></li>
//       </ul>
//     </div>

//     {/* Services */}
//     <div>
//       <h3 className="text-xl font-semibold text-[#FFD95A]">Our Services</h3>
//       <ul className="mt-4 space-y-2">
//         <li className="hover:text-[#FFEEA9] cursor-pointer">Puja Booking</li>
//         <li className="hover:text-[#FFEEA9] cursor-pointer">Vastu Shastra</li>
//       </ul>
//     </div>

//     {/* Contact */}
//     <div>
//       <h3 className="text-xl font-semibold text-[#FFD95A]">Contact Us</h3>
//       <ul className="mt-4 space-y-3">
//         <li className="flex items-center space-x-3">
//           <span>📞</span>
//           <a href="tel:+918871101043" className="hover:text-[#FFEEA9]">+91 887 110 1043</a>
//         </li>

//         <li className="flex items-center space-x-3">
//           <span>📧</span>
//           <a href="mailto:info.maapitamera@gmail.com" className="hover:text-[#FFEEA9]">
//             info.maapitamera@gmail.com
//           </a>
//         </li>

//         <li className="flex items-center space-x-3">
//           <span>📍</span>
//           <p>
//             Nalkheda, District Agar Malwa,<br />
//             Madhya Pradesh – 465441, India
//           </p>
//         </li>
//       </ul>
//     </div>
//   </div>

//   <div className="text-center text-[#FFD95A]  border-t border-yellow-700/20">
//     © {new Date().getFullYear()} Maa Pitambara Mandir — All Rights Reserved.
//   </div>
// </footer>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";




export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3A0202] via-[#8B1E24] to-[#210033] text-[#FDE68A] pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD95A]">Maa Pitambara</h3>
          <p className="mt-4 leading-relaxed text-sm opacity-90">
            Maa Pitambara Mandir, Nalkheda is a sacred seat of Shakti where devotees
            seek blessings for protection, prosperity, and spiritual upliftment
            through authentic Vedic rituals and divine grace.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-[#FDE68A]">
            <a href="https://www.facebook.com/profile.php?id=61584669398940" target="_blank" className="hover:text-[#FFEEA9] text-xl">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/pitabmera/" target="_blank" className="hover:text-[#FFEEA9] text-xl">
              <FaInstagram />
            </a>
            <a href="https://x.com/Maa_Pitambara03" target="_blank" className="hover:text-[#FFEEA9] text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCJM7Vtl9N_ynJQTO2GjjBbw" target="_blank" className="hover:text-[#FFEEA9] text-xl">
              <FaYoutube />
            </a>
            <a href="https://wa.me/918871101043" target="_blank" className="hover:text-[#FFEEA9] text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD95A]">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-[#FFEEA9] flex items-center gap-2">
                <FaArrowRight size={12} /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FFEEA9] flex items-center gap-2">
                <FaArrowRight size={12} /> About Us
              </Link>
            </li>
            <li>
              <Link to="/pujan" className="hover:text-[#FFEEA9] flex items-center gap-2">
                <FaArrowRight size={12} /> Pujan Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FFEEA9] flex items-center gap-2">
                <FaArrowRight size={12} /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Temple Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD95A]">Temple Timings</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaClock /> Morning: 5:00 AM – 12:00 PM
            </li>
       
            <li className="opacity-80 text-xs mt-3 italic">
              Timings may vary on festival days.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#FFD95A] mt-6">Resources</h3>
          <ul className="mt-4 space-y-3 text-sm">

                <li>
              <Link to="/pujabooking" className="hover:text-[#FFEEA9] flex items-center gap-2">
                 Online Puja Booking
              </Link>
            </li>
            <li className="hover:text-[#FFEEA9] cursor-pointer">Donations</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD95A]">Contact Us</h3>
          <ul className="mt-4 space-y-4 text-sm">

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FFD95A]" />
              <a href="tel:+918871101043" className="hover:text-[#FFEEA9]">
                +91 887 110 1043
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFD95A]" />
              <a href="mailto:info.maapitamera@gmail.com" className="hover:text-[#FFEEA9]">
                info.maapitambara@gmail.com
              </a>
            </li>

            {/* <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FFD95A] mt-1" />
              <p>
                Nalkheda, District Agar Malwa,<br />
                Madhya Pradesh – 465441, India
              </p>
            </li> */}
            <li className="flex items-start space-x-3">
  <FaMapMarkerAlt className="text-[#FFD95A]" />
  <a
    href="https://www.google.com/maps/search/?api=1&query=Maa+Pitambara+Mandir+Nalkheda"
    target="_blank"
    className="hover:text-[#FFEEA9]"
  >
    Nalkheda, District Agar Malwa,<br />
    Madhya Pradesh – 465441, India
  </a>
</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 pt-4 border-t border-yellow-700/20 text-sm text-[#FFD95A]">
        © {new Date().getFullYear()} Maa Pitambara Mandir — All Rights Reserved.
        <br />
        <span className="text-xs opacity-30">
          Designed & Developed by Again-soft Technologies</span>
      </div>
    </footer>
  );
}
