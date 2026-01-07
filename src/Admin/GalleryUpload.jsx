import React, { useState, useEffect } from "react";

export default function UploadGallery() {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Gallery Images
  const fetchGallery = async () => {
    try {
      const res = await fetch("https://server-ekmv.onrender.com/api/gallery");
      if (!res.ok) throw new Error("Failed to fetch gallery");

      const data = await res.json();
      setGallery(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Handle Image Upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      setUploading(true);
      setError(null);

      const res = await fetch("https://server-ekmv.onrender.com/api/gallery", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      await res.json();

      setImage(null);
      fetchGallery();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
         <h3 className="text-4xl font-bold text-center text-yellow-800 mb-10">
       UPLOAD IMAGE CONTENT
      </h3>
      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="mb-8 flex flex-col items-center"
      >
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
          accept="image/*"
        />
        <button
          type="submit"
          disabled={uploading}
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <p className="text-red-600 text-center mb-4">{error}</p>
      )}

      {/* Gallery Section */}
      <h3 className="text-xl font-semibold mb-4 text-center">Gallery</h3>
      {gallery.length === 0 ? (
        <p className="text-center text-gray-500">No images uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((img) => (
            <div
              key={img._id}
              className="rounded shadow overflow-hidden bg-white"
            >
              <img
                src={img.url}
                alt={img.filename}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-sm text-center text-gray-700">
                {img.filename}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
