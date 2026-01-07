// src/Pages/VideoManager.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function VideoManager() {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videos, setVideos] = useState([]);

  // Fetch videos (READ)
  const fetchVideos = async () => {
    try {
      const res = await axios.get("https://server-ekmv.onrender.com/api/upload");
      setVideos(res.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Handle upload (CREATE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) return alert("Please select a video file");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", videoFile);

    try {
      const res = await axios.post("https://server-ekmv.onrender.com/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      alert("Video uploaded successfully!");
      setTitle("");
      setVideoFile(null);
      setPreviewUrl(null);
      setUploadProgress(0);

      // Refresh list
      fetchVideos();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
      setUploadProgress(0);
    }
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  // Delete video (DELETE)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server-ekmv.onrender.com/api/upload/${id}`);
      setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow text-black">
      {/* Upload Form */}
      <h3 className="text-3xl font-bold text-center text-yellow-800 mb-6 underline">
        Manage Videos
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Video Title"
          className="w-full px-4 py-2 border rounded"
          required
        />

        {/* File Selector */}
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="w-full"
          required
        />

        {/* Upload Progress */}
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
            <div
              className="bg-green-700 h-full text-white text-xs text-center"
              style={{ width: `${uploadProgress}%` }}
            >
              {uploadProgress}%
            </div>
          </div>
        )}

        {/* Video Preview */}
        {previewUrl && (
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Preview:</label>
            <video
              src={previewUrl}
              controls
              className="w-full max-h-64 rounded border"
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Upload
        </button>
      </form>

      {/* Uploaded Videos List */}
      <h2 className="text-2xl font-bold mb-4">Uploaded Videos</h2>
      {videos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video._id}
              className="border rounded-lg shadow p-4 flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
              <video
                src={video.url}
                controls
                className="w-full h-96 rounded mb-3"
              />
              <button
                onClick={() => handleDelete(video._id)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
