import React from "react";

export default function Intro() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-2xl p-10 max-w-6xl">
        
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dkus3svco/image/upload/v1755976467/mern_uploads/images/en37ca50clzgdbmqdg2g.jpg"
            alt="Pt. Manish Purohit"
            className="rounded-2xl border-4 border-yellow-500 shadow-lg w-80 h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-5 text-gray-800">
          <h2 className="text-3xl font-bold text-red-700 border-b-4 border-yellow-400 inline-block pb-2">
            ✦ Pt. Manish Purohit ✦
          </h2>

          <p className="leading-relaxed">
            I reside in the sacred city of Maa Pitambara, Nalkheda. Since
            childhood, devotion to Maa and surrender at her divine feet have
            guided me on the spiritual path. The grace and blessings of Maa have
            been the greatest strength of my life.
          </p>

          <p className="leading-relaxed">
            With the blessings of my Gurus and Maa’s divine grace, I have had
            the privilege to perform various Pujas, Anushthans, and Havans. My
            purpose is not limited to rituals alone, but to bring peace,
            happiness, and prosperity into the lives of devotees.
          </p>

          <p className="leading-relaxed">
            Through Maa’s devotion and service, I strive to guide every devotee
            on the right path and help them overcome life’s difficulties.
          </p>

          <p className="text-yellow-600 font-semibold text-lg">
            || Jai Maa Pitambara ||
          </p>

          <div>
            <p className="font-bold text-red-800">Acharya Manish Purohit</p>
            <p className="text-gray-600">Maa Pitambara Mandir, Nalkheda</p>
          </div>
        </div>
      </div>
    </div>
  );
}
