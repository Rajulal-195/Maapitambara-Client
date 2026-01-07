import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [urls, setUrls] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Handle file select
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreview(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  // Upload single or multiple files
  const handleUpload = async (type) => {
    if (!files.length) return alert("Please select files first!");

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      setUploading(true);

      let endpoint = "";
      if (type === "image") endpoint = "https://server-ekmv.onrender.com/upload/image";
      if (type === "video") endpoint = "https://server-ekmv.onrender.com/upload/video";
      if (type === "images") endpoint = "https://server-ekmv.onrender.com/upload/images";
      if (type === "videos") endpoint = "https://server-ekmv.onrender.com/upload/videos";

      // If single file: send only one
      if (type === "image" || type === "video") {
        formData.delete("files");
        formData.append("file", files[0]);
      }

      const res = await axios.post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUrls(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
    <h3 className="text-4xl font-bold text-center text-yellow-800 mb-10">
       UPLOAD IMAGE CONTENT
      </h3>
      {/* File Selector */}
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Preview */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {preview.map((src, i) => (
          <div key={i} className="w-32 h-32 border rounded overflow-hidden">
            {files[i].type.startsWith("video") ? (
              <video src={src} className="w-full h-full object-cover" controls />
            ) : (
              <img src={src} alt="preview" className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>

      {/* Upload Buttons */}
      <div className="flex gap-3 justify-center mb-4">
        <button
          onClick={() => handleUpload("image")}
          disabled={uploading}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Single Image
        </button>
   
        <button
          onClick={() => handleUpload("images")}
          disabled={uploading}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Multiple Images
        </button>
   
      </div>

      {uploading && <p className="text-yellow-500">⏳ Uploading...</p>}

      {/* Uploaded URLs */}
      <div>
        {urls.length > 0 && (
          <div className="mt-4 text-left">
            <h3 className="font-bold mb-2">✅ Uploaded Files:</h3>
            {urls.map((file, i) => (
              <div key={i} className="mb-3">
                <a
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  {file.url}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
