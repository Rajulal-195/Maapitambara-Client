import React, { useState } from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import toast, { Toaster } from "react-hot-toast";

const PujaBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    datetime: "",
    pujaType: "",
    participants: "",
    mode: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const pujaOptions = [
    "Baglamukhi Vishesh Havan",
    "Court Case Vijay Praptiya",
    "Grah Dosh Puja",
    "Rajnaitik Pujan",
    "Laxmi Prapti Puja",
    "Manichit Vivah Puja",
    "Rognashak Puja",
    "Santan Prapti Puja",
    "Sammohan Puja",
    "Shatru Stambhan Puja",
    "Shatru Vinash Puja",
    "Vashikaran Puja",
    "Uchchatan Puja",
    "Videshan Puja",
    "Vivah Badha Nivaran Puja",
    "Karya Siddhi Puja",
    "Vastu Shanti Puja",
    "Naukri Prapti Puja",
  ];

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.datetime) {
      newErrors.datetime = "Date & Time is required";
    }

    if (!formData.pujaType) {
      newErrors.pujaType = "Please select a Puja type";
    }

    if (!formData.mode) {
      newErrors.mode = "Please select Online or In-person";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("⚠️ Please correct the highlighted errors!");
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("https://server-ekmv.onrender.com/api/puja-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(" Puja booking submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          address: "",
          datetime: "",
          pujaType: "",
          participants: "",
          mode: "",
          notes: "",
        });
      } else {
        toast.error("❌ Failed to submit booking. Try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Server error, please try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-white p-2 sm:p-4 lg:p-8 mt-3">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-yellow-50 to-orange-100 shadow-xl rounded-xl p-4 sm:p-6 lg:p-10 w-full max-w-5xl"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-700 mb-6 text-center">
            🕉️ Puja Booking Form
          </h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Client Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              />
              {errors.mobile && (
                <p className="text-red-600 text-sm">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Address / City (optional)
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              />
            </div>

            {/* Date & Time */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Date & Time *
              </label>
              <input
                type="datetime-local"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              />
              {errors.datetime && (
                <p className="text-red-600 text-sm">{errors.datetime}</p>
              )}
            </div>

            {/* Puja Type */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Select Puja *
              </label>
              <select
                name="pujaType"
                value={formData.pujaType}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              >
                <option value="">-- Select Puja --</option>
                {pujaOptions.map((puja, idx) => (
                  <option key={idx} value={puja}>
                    {puja}
                  </option>
                ))}
              </select>
              {errors.pujaType && (
                <p className="text-red-600 text-sm">{errors.pujaType}</p>
              )}
            </div>

            {/* Participants */}
            <div>
              <label className="block font-medium mb-1 text-black">
                Number of Participants
              </label>
              <input
                type="number"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                min="1"
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              />
            </div>

            {/* Mode */}
            <div>
              <label className="block font-medium mb-1 text-black">Mode *</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
              >
                <option value="">-- Select Mode --</option>
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
              </select>
              {errors.mode && (
                <p className="text-red-600 text-sm">{errors.mode}</p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-4">
            <label className="block font-medium mb-1 text-black">
              Special Instructions / Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:ring-2 text-black focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-2 rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700 text-white"
            }`}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>

        {/* Toast Container */}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer />
    </>
  );
};

export default PujaBooking;
