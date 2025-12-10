import React, { useEffect, useState } from "react";
import axiosAdmin from "../api/axiosAdmin";

const AdminPage = () => {
  const [deacons, setDeacons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDeacons = async () => {
    try {
      const res = await axiosAdmin.get("/deacons");
      setDeacons(res.data);
    } catch (err) {
      console.error("Error fetching deacons:", err.response || err);
      setError(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this deacon?")) return;

    try {
      await axiosAdmin.delete(`/deacons/${id}`);
      setDeacons(deacons.filter((d) => d._id !== id));
    } catch (err) {
      console.error("Error deleting deacon:", err.response || err);
      alert(err.response?.data?.message || "Failed to delete");
    }
  };

  useEffect(() => {
    fetchDeacons();
  }, []); // Enhanced loading and error display

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl animate-pulse">Loading Registered Deacons...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-12 text-center bg-red-900 text-white min-h-screen">
        <p className="text-2xl font-bold mb-4">🚨 Error</p>
        <p className="text-lg">{error}</p>
      </div>
    );

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
           {" "}
      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-400 tracking-wider">
                👥 Registered Deacons Management      {" "}
      </h2>
           {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {" "}
        {deacons.map((user) => (
          <div
            key={user._id} // Attractive Card Styles: Dark background, large shadow, border, premium hover effect
            className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-indigo-500/10 p-5 flex flex-col justify-between 
                        transform hover:scale-[1.03] transition-all duration-300 ease-in-out hover:border-indigo-500"
          >
                       {" "}
            <div className="mb-4 space-y-1">
                            {/* Title Style */}             {" "}
              <h3 className="font-extrabold text-xl text-white truncate">
                {user.fullName}
              </h3>
                           {" "}
              {/* Detail Styles: Lighter text color, use of semi-transparent dividers */}
                           {" "}
              <div className="border-t border-gray-700 pt-2">
                <p className="text-sm text-gray-400">📧 {user.email}</p>
                <p className="text-sm text-gray-400">📞 {user.phone}</p>
                <p className="text-sm text-gray-400">🏢 {user.department}</p>
                <p className="text-sm text-gray-400">
                  🗓️ Year:{" "}
                  <span className="text-indigo-400 font-semibold">
                    {user.year}
                  </span>
                </p>
              </div>
                         {" "}
            </div>
                       {" "}
            <button
              onClick={() => handleDelete(user._id)} // Delete Button Style: Full width, elevated, distinct color
              className="mt-4 w-full bg-red-600 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200"
            >
                            🗑️ Delete Record            {" "}
            </button>
                     {" "}
          </div>
        ))}
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default AdminPage;
