// src/Pages/GalleryManager.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import FileUpload from "./FileUpload";

export default function GalleryManage() {
    const [gallery, setGallery] = useState([]);


    // Fetch Images (READ)
    const fetchImages = async () => {
        try {
            const res = await axios.get("https://server-ekmv.onrender.com/api/images");
            setGallery(res.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

 
 

    // Delete Image (DELETE)
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://server-ekmv.onrender.com/api/images/${id}`);
            setGallery(gallery.filter((img) => img._id !== id));

        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    return (

        <>
        <FileUpload/>
        <div className="p-6">
           <h3 className="text-4xl font-bold text-center text-yellow-800 mb-10">
     GALLERY MANAGER
      </h3>  

           

            {/* Image List */}
            <div className="grid grid-cols-3 gap-4">
                {gallery.map((img) => (
                    <div
                        key={img._id}
                        className="border rounded p-2 shadow flex flex-col bg-white "
                    >
                          <div className="flex gap-2">

                            <button onClick={() => handleDelete(img._id)} className="bg-gray-500 text-white text-right px-3 py-1 rounded hover:bg-red-500"> X </button>
                        </div>
                        <img
                            src={img.imageUrl}
                            alt="Gallery"
                            className="w-full h-80 group relative border h- border-yellow-500 rounded-lg overflow-hidden shadow-md hover:shadow-black transition-shadow duration-600"
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
