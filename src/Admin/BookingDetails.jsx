// src/Pages/BookingDetails.jsx
import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://server-ekmv.onrender.com/api/puja-booking")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-4xl font-bold underline text-center text-yellow-800 mb-10">
        - BOOKING DETAILS -
      </h3>

      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-md rounded-lg min-w-[1000px]">
          <thead>
            <tr className="bg-yellow-600 text-left text-white">
              <th className="p-2 border">Booking ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Mobile</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Datetime</th>
              <th className="p-2 border">Puja Type</th>
              <th className="p-2 border">Participants</th>
              <th className="p-2 border">Mode</th>
              <th className="p-2 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="hover:bg-yellow-50 text-black">
                <td className="p-2 border">{b.bookingId}</td>
                <td className="p-2 border">{b.name}</td>
                <td className="p-2 border">{b.mobile}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.address}</td>
                <td className="p-2 border">
                  {new Date(b.datetime).toLocaleString()}
                </td>
                <td className="p-2 border">{b.pujaType}</td>
                <td className="p-2 border">{b.participants}</td>
                <td className="p-2 border">{b.mode}</td>
                <td className="p-2 border">{b.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetails;
