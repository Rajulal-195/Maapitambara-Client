// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './Admin/AdminDashboard';
import CustomerQuery from './Admin/CustomerQuery';
import FileUpload from './Admin/FileUpload';
import Contactinfo from './Admin/Contactinfo';
import GalleryUpload from './Admin/GalleryUpload';
import VideoUpload from './Admin/VideoUpload';

import Gallery from './Component/Gallery';
import VideoList from './Component/VideoList';
import ProtectedRoute from './Admin/ProtectedRoute';
import PujanList from './Component/PujanList';

import bgImage from './Assest/201077.webp';
import PujaBooking from './Component/Pujabooking';
import BookingDetails from "./Admin/BookingDetails"
import GalleryManage from './Admin/GalleryManage';

import { Toaster } from "react-hot-toast";

export default function App() {
  return (

    <>
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="relative min-h-screen">
        {/* 🌄 Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* 🌑 Dark overlay */}
        <div className="absolute inset-0  z-10"></div>

        {/* 🌟 Main content */}
        <div className="relative z-20 text-white">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/video-list" element={<VideoList />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/pujan" element={<PujanList />} />
              <Route path="/pujabooking" element={<PujaBooking />} />


              {/* 🔐 Protected Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              >
                <Route path="bookingdetails" element={<BookingDetails />} />
                <Route path="requests" element={<CustomerQuery />} />
                <Route path="img" element={<GalleryManage />} />
                <Route path="info" element={<Contactinfo />} />
                <Route path="galleryupload" element={<GalleryUpload />} />
                <Route path="video" element={<VideoUpload />} />
                <Route index element={<CustomerQuery />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
