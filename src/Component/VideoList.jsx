import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Header from "../Pages/Header"; 
import Loader from './Loader';
import Footer from '../Pages/Footer';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('https://server-ekmv.onrender.com/api/upload');
        setVideos(res.data);
      } catch (err) {
        console.error('Failed to fetch videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Auto play/pause logic with IntersectionObserver
  useEffect(() => {
    if (videoRefs.current.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => { });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6, // Play when 60% is visible
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  if (loading) return <Loader />;
  if (videos.length === 0) return <p className="text-center">No videos found.</p>;

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100  p-4">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">All Videos</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video, index) => (
            <div
              key={video._id}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition duration-300"
            >
              <div className="p-3 border-b">
                <h3 className="text-md font-semibold text-gray-700 truncate">{video.title}</h3>
              </div>
              <div className="aspect-w-9 aspect-h-16 bg-black">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.url}
                  className="w-full h-full object-contain"
                  muted
                  playsInline
                  controls
                  onClick={(e) => {
                    const video = e.target;
                    video.muted = true; // unmute when clicked
                    video.play(); // resume if needed
                  }}
                >
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default VideoList;
