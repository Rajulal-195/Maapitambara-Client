import React from "react";
import "../App.css"; // Keep your animations here

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-black to-black text-white animate-fadeIn">
      <div className="flex flex-col items-center space-y-8">

        {/* Divine Glowing Sun */}
        <div className="relative">
          <div className="w-28 h-28 bg-yellow-400 rounded-full shadow-[0_0_80px_30px_rgba(255,255,0,0.5)] animate-pulseGlow"></div>

          {/* Rotating aura */}
          <div className="absolute inset-0 border-4 border-yellow-300/40 rounded-full animate-slowSpin"></div>
        </div>

        {/* Smooth pulsing text */}
        <div className="text-yellow-200 text-xl font-semibold tracking-wide animate-softPulse">
          Preparing your guidance...
        </div>
      </div>
    </div>
  );
};

export default Loader;
