// import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

// export default function ExContact() {
//   return (
//     <section className="bg-gradient-to-b from-white to-yellow-50 px-6 py-16 border-t border-yellow-600">
//       <div className="max-w-5xl mx-auto text-center space-y-10">

//         {/* Title */}
//         <div>
//           <h2 className="text-4xl font-bold text-red-700 drop-shadow-sm">
//             Get in Touch
//           </h2>
//           <p className="text-lg text-yellow-700 mt-2">
//             We're here to assist you with guidance, support, and spiritual insights.
//           </p>
//         </div>

//         {/* Contact Cards */}
//         <div className="grid sm:grid-cols-2 gap-8 mt-8">

//           {/* Email */}
//           <div className="flex items-center justify-center px-6 py-5 bg-white rounded-2xl shadow-lg border border-yellow-300 hover:shadow-xl transition-all duration-300">
//             <Mail className="text-yellow-700 mr-3" size={26} />
//             <a
//               href="mailto:info.maapitamera@gmail.com"
//               className="text-lg text-yellow-700 font-medium hover:text-red-700 transition"
//             >
//               info.maapitamera@gmail.com
//             </a>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center justify-center px-6 py-5 bg-white rounded-2xl shadow-lg border border-yellow-300 hover:shadow-xl transition-all duration-300">
//             <Phone className="text-yellow-700 mr-3" size={26} />
//             <a
//               href="tel:+918871101043"
//               className="text-lg text-yellow-700 font-medium hover:text-red-700 transition"
//             >
//               +91 887 110 1043
//             </a>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-6 mt-6">
//           {[ 
//             { icon: <Facebook size={28} />, url: "https://facebook.com" },
//             { icon: <Instagram size={28} />, url: "https://instagram.com" },
//             { icon: <Twitter size={28} />, url: "https://twitter.com" },
//             { icon: <Youtube size={28} />, url: "https://youtube.com" },
//           ].map((item, index) => (
//             <a
//               key={index}
//               href={item.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-yellow-700 hover:text-red-700 transition transform hover:scale-110"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { Mail, Phone, Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";

export default function ExContact() {
  return (
    <section className="bg-gradient-to-b from-white to-yellow-50 px-6 py-16 border-t border-yellow-600">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        {/* Title */}
        <div>
          <h2 className="text-4xl font-bold text-red-700 drop-shadow-sm">
            Get in Touch
          </h2>
          <p className="text-lg text-yellow-700 mt-2">
            We're here to assist you with guidance, support, and spiritual insights.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-8 mt-8">

          {/* Email */}
          <div className="flex items-center justify-center px-6 py-5 bg-white rounded-2xl shadow-lg border border-yellow-300 hover:shadow-xl transition-all duration-300">
            <Mail className="text-yellow-700 mr-3" size={26} />
            <a
              href="mailto:info.maapitamera@gmail.com"
              className="text-lg text-yellow-700 font-medium hover:text-red-700 transition"
            >
              info.maapitamera@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center px-6 py-5 bg-white rounded-2xl shadow-lg border border-yellow-300 hover:shadow-xl transition-all duration-300">
            <Phone className="text-yellow-700 mr-3" size={26} />
            <a
              href="tel:+918871101043"
              className="text-lg text-yellow-700 font-medium hover:text-red-700 transition"
            >
              +91 887 110 1043
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          {[
            { icon: <Facebook size={28} />, url: "https://www.facebook.com/profile.php?id=61584669398940  " },
            { icon: <Instagram size={28} />, url: "https://www.instagram.com/pitabmera/" },
            { icon: <Twitter size={28} />, url: "https://x.com/Maa_Pitambara03" },
            { icon: <Youtube size={28} />, url: "https://www.youtube.com/channel/UCJM7Vtl9N_ynJQTO2GjjBbw" },
            { icon: <MessageCircle size={28} />, url: "https://wa.me/918871101043" }, // WhatsApp
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-700 hover:text-red-700 transition transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
