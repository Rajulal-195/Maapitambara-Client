import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../Assest/hp.gif';
import ExContact from '../Component/ExContact';
import Header from './Header';
import Footer from "./Footer"
import Carous from '../Component/Carous';

export default function Home() {




  return (
<>
<Header/>

    <div
      className="relative mt-3 bg-cover bg-center min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ Dark Overlay */}
      {/* <div className="absolute inset-0 bg-white-20 backdrop-blur-sm z-0"></div> */}
<div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-0"></div>

      {/* ✅ Content Over the Overlay */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-5xl font-extrabold drop-shadow-lg font-serif">Welcome to Maa Pitambara</h1>
       <h2 className='"mt-4 text-2xl font-semibold text-red-700 bg-yellow-50/80 px-5 py-3 rounded-xl shadow'> || ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्रीं ॐ स्वाहा ||</h2>
        <p className="mb-6 text-lg">
          
           </p>
        <Link
          to="/about"
          className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          Learn More
        </Link>
      </div>
    </div>


    <Carous/>
    <ExContact/>
<Footer/>
</>
  );
}
