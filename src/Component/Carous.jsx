import React, { useEffect, useState } from "react";

import Loader from "./Loader"; // Adjust path if needed
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
const Carous = () => {
 const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-ekmv.onrender.com/api/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (images.length === 0)
    return (
      <>
        <Header />
        <p className="text-center mt-8 text-gray-500">No Image found.</p>
      </>
    );

  return (
    <>

      <div className=" bg-white transition-opacity p-4">
        <h2 className="text-3xl font-bold text-red-700 mb-6 text-center underline">
          Image Gallery
        </h2>

        {/* Auto-scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {/* Duplicate images to create infinite effect */}
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="min-w-[300px] h-80 border border-yellow-500 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={img.imageUrl}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Carous;
