import React, { useEffect, useState } from "react";

export default function Contactinfo() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://server-ekmv.onrender.com/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (

    <div className="min-h-screen p-2 mt-4 ">
      <div className="max-w-7xl  mx-auto">
        <h3 className="text-4xl font-bold text-center text-yellow-800  mb-10">
          CONTACT MESSAGES
        </h3>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border">Phone</th>
                <th className="px-4 py-3 border">Message</th>
                <th className="px-4 py-3 border">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="hover:bg-yellow-50 transition-colors"
                  >
                    <td className="px-4 py-3 border">{contact.name}</td>
                    <td className="px-4 py-3 border">{contact.email}</td>
                    <td className="px-4 py-3 border">{contact.phone}</td>
                    <td className="px-4 py-3 border">{contact.message}</td>
                    <td className="px-4 py-3 border">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    No contact messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
