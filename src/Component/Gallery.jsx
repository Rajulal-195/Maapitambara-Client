import React, { useEffect, useState } from "react";
import Header from "../Pages/Header";
import Loader from "./Loader"; // Adjust path if needed
import Footer from "../Pages/Footer";

const Gallery = () => {
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
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100  transition-opacity p-4">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Image Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img._id}
       className="group relative border border-yellow-500 rounded-lg overflow-hidden shadow-md hover:shadow-black transition-shadow duration-600"
            >
              <div className="w-full h-80">
                <img
                  src={img.imageUrl}
                  alt="Uploaded"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            
            </div>
          ))}
      </div>
    </div >
      <Footer />
    </>
  );
};

export default Gallery;
