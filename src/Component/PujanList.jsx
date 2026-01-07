import React from "react";
import Header from "../Pages/Header"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Baglamukhihavan from "../Assest/Baglamukhi-Anusthan.webp";

// Puja Data JSON
const pujaData = {
  sammohanTantraPuja: {
    title: "Sammohan Tantra Puja",
    image: "https://t3.ftcdn.net/jpg/15/95/29/82/360_F_1595298230_k6NEjBSCHj3aJWDi7hxAw5VHHh7d2ksR.jpg",
    alt: "Sammohan Puja Ritual",
    description:
      "The Sammohan Tantra Puja is a powerful spiritual ritual dedicated to invoking the divine grace of Maa Baglamukhi, the goddess of supreme control and enchantment. This puja is believed to enhance attraction, harmony, and influence, helping devotees attract favorable energies and resolve conflicts in relationships and personal life.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          'Sammohan translates to "enchantment"—this ritual aligns your aura with cosmic energies of attraction, creating harmony in relationships and generating favorable impressions in social and professional domains.',
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Resolving misunderstandings and boosting emotional harmony.",
          "Strengthening personal and professional bonds through attraction.",
          "Enhancing charisma and influential presence in social circles.",
          "Removing negativity and friction in relationships.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "In today’s dynamic world, where relationships may strain under stress, this puja can re-synchronize energies, restore mutual understanding, and build emotional cohesion—creating a peaceful, loving environment.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Often, Sammohan Puja is performed not for manipulation, but with pure intent—to attract affection, mutual respect, and tranquility in relationships.",
      },
    ],
  },

  naukriPraptiPuja: {
    title: "Naukri Prapti Puja",
    image: "https://i.ibb.co/xyz/Naukri-Prapti-Puja.jpg",
    alt: "Naukri Prapti Puja Ritual",
    description:
      "The Naukri Prapti Puja is a sacred Vedic ritual dedicated to Maa Baglamukhi and other divine forces, performed to remove obstacles in career growth and bless devotees with stable employment opportunities. This puja helps in achieving professional success, overcoming job-related hurdles, and opening new doors of prosperity.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "The Naukri Prapti Puja channels divine blessings to align your karmic energies with career opportunities. It clears delays, strengthens confidence, and invokes success in interviews, promotions, and professional endeavors.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Overcoming obstacles and delays in job search.",
          "Gaining confidence and clarity for interviews and career decisions.",
          "Attracting stable, well-paying, and satisfying job opportunities.",
          "Removing negativity, competition, and professional setbacks.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "In today’s competitive environment, securing a good job is often challenging. This puja not only helps manifest employment opportunities but also ensures stability, growth, and long-term career success with divine grace.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Devotees often perform this puja before important interviews, career changes, or while seeking stability in professional life. With faith and devotion, it aligns one’s path toward prosperity and fulfillment.",
      },
    ],
  },

  karyaSiddhiPuja: {
    title: "Karya Siddhi Puja",
    image: "https://i.ibb.co/xyz/Karya-Siddhi-Puja.jpg",
    alt: "Karya Siddhi Puja Ritual",
    description:
      "The Karya Siddhi Puja is a powerful Vedic ritual dedicated to achieving success in important endeavors and removing obstacles that block progress. It is performed to invoke divine blessings for the fulfillment of goals, whether personal, professional, or spiritual. This puja ensures clarity, positivity, and smooth completion of desired tasks.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "‘Karya Siddhi’ literally translates to ‘fulfillment of tasks.’ This puja aligns your efforts with cosmic energies, ensuring that your goals are supported by divine grace. It is especially helpful for overcoming unseen obstacles, delays, and resistance in life’s important ventures.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Removes obstacles and delays in achieving desired goals.",
          "Blesses devotees with confidence, determination, and focus.",
          "Ensures success in business, career, education, or personal endeavors.",
          "Invokes divine support for major milestones such as promotions, projects, or new beginnings.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "When sincere efforts alone feel insufficient to achieve success, Karya Siddhi Puja acts as divine support. It helps manifest intentions into reality, providing spiritual strength and the right circumstances to fulfill your dreams.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Many devotees perform this puja before starting new ventures, appearing for exams, launching projects, or stepping into major life transitions. With Maa Baglamukhi’s blessings, they often experience smooth progress and timely success.",
      },
    ],
  },

  vastuShantiPuja: {
    title: "Vastu Shanti Puja",
    image: "https://i.ibb.co/xyz/Vastu-Shanti-Puja.jpg",
    alt: "Vastu Shanti Puja Ritual",
    description:
      "The Vastu Shanti Puja is a sacred ritual performed to harmonize the energies of a home, office, or land. It removes Vastu doshas (imbalances) caused by improper design or negative energies, inviting peace, prosperity, and spiritual well-being into the space. This puja aligns your dwelling with universal forces, ensuring balance and positivity.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "According to Vedic tradition, Vastu Purusha governs every space. Any imbalance in the placement of rooms, directions, or energies may cause health, financial, or relationship issues. The Vastu Shanti Puja balances these cosmic energies, bringing harmony between you and your living environment.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Removes Vastu doshas and negative influences from home or office.",
          "Attracts peace, prosperity, and positive vibrations into the space.",
          "Helps resolve frequent disputes, health problems, or financial instability caused by imbalance.",
          "Strengthens harmony between family members and improves relationships.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "If you are moving into a new home, starting a business, or experiencing constant hurdles in your existing space, performing Vastu Shanti Puja ensures divine blessings and an environment filled with positivity, balance, and growth.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Many families perform Vastu Shanti Puja before entering a new property (Griha Pravesh) or after renovating their home. Devotees often share that after this puja, their household experienced peace, financial stability, and improved harmony.",
      },
    ],
  },

  shatruVinashPuja: {
    title: "Shatru Vinash Puja",
    image: "https://i.ibb.co/your-image-link/shatru-vinash-puja.jpg",
    alt: "Shatru Vinash Puja Ritual",
    description:
      "The Shatru Vinash Puja is a potent spiritual ritual performed to destroy enemies and negative influences that obstruct peace, progress, and success. This puja calls upon divine powers to eliminate adversaries and restore harmony in life.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "Shatru Vinash Puja is dedicated to removing hostile energies and vanquishing enemies that cause harm emotionally, mentally, or spiritually.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Eliminates the negative impact of enemies and competitors.",
          "Protects from black magic, jealousy, and harmful intentions.",
          "Enhances courage, confidence, and overall well-being.",
          "Restores peace and stability in personal and professional life.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "This puja is recommended for those facing intense opposition, rivalry, or hostility, helping to neutralize threats and foster a positive environment.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Devotees often report feeling empowered and protected, witnessing positive changes in their life circumstances after performing this puja with devotion.",
      },
    ],
  },

  shatruStambhanPuja: {
    title: "Shatru Stambhan Puja",
    image: "https://i.ibb.co/your-image-link/shatru-stambhan-puja.jpg",
    alt: "Shatru Stambhan Puja Ritual",
    description:
      "The Shatru Stambhan Puja is a powerful ritual performed to neutralize enemies, remove obstacles caused by rivals, and restore peace and harmony in personal and professional life. This puja invokes divine energies to protect devotees from harm and malicious influences.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "Shatru Stambhan Puja is believed to block negative forces, weaken the influence of adversaries, and create a protective shield around the devotee.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Neutralizes harmful effects of enemies and rivals.",
          "Brings peace and harmony in strained relationships.",
          "Protects against black magic, jealousy, and ill will.",
          "Enhances confidence and mental strength.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "In challenging times with hostility or rivalry, this puja provides spiritual defense and mental peace, helping devotees overcome adversities with divine grace.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Devotees have experienced relief from stress and increased courage, reporting positive changes in relationships and work after performing this puja with faith.",
      },
    ],
  },

  santanPraptiPuja: {
    title: "Santan Prapti Puja",
    image: "https://i.ibb.co/your-image-link/santan-prapti-puja.jpg",
    alt: "Santan Prapti Puja Ritual",
    description:
      "The Santan Prapti Puja is a sacred ritual performed to invoke the blessings of divine energies for fertility, childbirth, and the well-being of offspring. This puja is dedicated to parents desiring healthy progeny and the continuation of family lineage.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "Santan Prapti Puja is believed to bless couples with children, promote fertility, and ensure the health and prosperity of the family’s future generations.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Blessings for conception and safe childbirth.",
          "Health and longevity of offspring.",
          "Strengthening family bonds and lineage continuity.",
          "Removal of obstacles related to fertility and progeny.",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "In today’s world where family and progeny are vital, this puja provides spiritual support to couples and families seeking children, fostering peace, hope, and divine protection.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Many devotees have reported increased positivity, emotional balance, and fulfillment of desires related to parenthood after this puja, performed with sincere devotion.",
      },
    ],
  },

  baglamukhiHavanPujan: {
    title: "🔱 Baglamukhi Havan Pujan",
    image: "Baglamukhihavan",
    alt: "Baglamukhi Havan Ritual",
    description:
      "The Baglamukhi Havan Pujan is a sacred fire ritual dedicated to Maa Baglamukhi, the powerful goddess worshipped for protection, victory in legal matters, and removal of enemies. This puja invokes divine energy to overcome negativity and bring success.",
    sections: [
      {
        heading: "✨ Significance:",
        content:
          "The Baglamukhi Havan is believed to paralyze negative energies and silence enemies on emotional, legal, and spiritual levels, providing a strong protective shield.",
      },
      {
        heading: "✅ Benefits:",
        list: [
          "Victory in court cases and legal disputes",
          "Protection from evil eye and black magic",
          "Success in politics, business, and competitive exams",
          "Freedom from negative thoughts and obstacles",
        ],
      },
      {
        heading: "🕉️ Why You Should Do It:",
        content:
          "In today's uncertain world, this puja strengthens your aura, stabilizes your mind, and offers protection against jealousy, rivalry, and hidden enemies.",
      },
      {
        heading: "💡 Devotee Insight:",
        content:
          "Many devotees experience profound peace and confidence after this puja, helping them navigate challenges with divine support.",
      },
    ],
  },
};

const PujanList = () => {
  const pujas = Object.values(pujaData);

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 py-12 sm:px-6 lg:px-20 text-gray-800 space-y-12">
        {pujas.map((puja, index) => (
          <div
            key={index}
            className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-yellow-300 transition-transform duration-300 hover:shadow-2xl group"
          >
            {/* Image with hover zoom and slight rotation */}
            <div className="overflow-hidden relative group">
              {/* <img
                src={Baglamukhihavan}
                alt={puja.alt}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-1"
              /> */}

              <img
  src={puja.image}
  alt={puja.alt}
  className="w-full h-72 object-fit transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-1"
/>

              <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-300 transition duration-500"></div>
            </div>

            {/* Puja Content */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-red-700 mb-4">{puja.title}</h1>
              <p className="mb-6 text-lg leading-relaxed">{puja.description}</p>

              <div className="space-y-6">
                {puja.sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-xl font-semibold text-yellow-700">{section.heading}</h2>
                    {section.list ? (
                      <ul className="list-disc list-inside space-y-1">
                        {section.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Centered call button */}
              <div className="space-y-4 mt-8 flex flex-col items-center">
                {/* Call Button */}
                <a
                  href="tel:+918871101043"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-md hover:from-yellow-600 hover:to-orange-600 transition"
                >
                  <FaPhoneAlt className="text-lg" />
                  Call Pandit ji to Book This Puja
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/918871101043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <FaWhatsapp className="text-2xl text-white" />
                  <span>Connect with Pandit Ji via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PujanList;
