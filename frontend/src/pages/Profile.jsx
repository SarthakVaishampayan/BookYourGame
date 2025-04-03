// /* eslint-disable no-unused-vars */
// import React from 'react'
// import Navbar from '../components/Navbar'
// import HomeContent from '../components/HomeContent'

// const App = () => {
//   return (
//    <>
//    <Navbar/>


//    </>
//   )
// }

// export default App

import  { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [user] = useState({
    name: "Sarthak Vaishampayan",
    email: "sarthakvaishampayan22@gmail.com",
    phone: "+91 9425340813",
    address: "B1-457 GHS Hostel Manipal University Jaipur, Jaipur, Rajasthan, India",
    profilePic: "https://via.placeholder.com/150", 
    memberSince: "October 22, 2019",
    totalBookings: 27,
    favoriteConsole: "PlayStation 5",
    notifications: true,
    newsletter: true,
  });

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Your Profile</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Personal Info */}
          <div className="p-6 rounded-lg shadow-md bg-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Personal Information</h2>

            <div className="flex items-center space-x-4">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md"
              />
              <button className="px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
                Change Picture
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <label className="block text-gray-300">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-black/40 text-white"
                value={user.name}
                />

              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded bg-black/40 text-white"
                value={user.email}
              />

              <label className="block text-gray-300">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded bg-black/40 text-white"
                value={user.phone}
              />

              <label className="block text-gray-300">Address</label>
              <textarea className="w-full p-2 border rounded bg-black/40 text-white">
                {user.address}
              </textarea>
            </div>

            <button className="mt-4 w-full px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
              Save Changes
            </button>
          </div>

          {/* Account Statistics & Preferences */}
          <div className="space-y-6">
            {/* Account Statistics */}
            <div className="p-6 rounded-lg shadow-md bg-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Account Statistics</h2>

              <p className="text-gray-300">
                <strong>Member Since:</strong> {user.memberSince}
              </p>
              <p className="text-gray-300">
                <strong>Total Bookings:</strong> {user.totalBookings}
              </p>
              <p className="text-gray-300">
                <strong>Favorite Console:</strong> {user.favoriteConsole}
              </p>
            </div>

            {/* Preferences */}
            <div className="p-6 rounded-lg shadow-md bg-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Preferences</h2>

              <div className="flex justify-between items-center">
                <label className="text-gray-300">Email Notifications</label>
                <input type="checkbox" checked={user.notifications} className="w-4 h-4" />
              </div>

              <div className="flex justify-between items-center mt-2">
                <label className="text-gray-300">Subscribe to Newsletter</label>
                <input type="checkbox" checked={user.newsletter} className="w-4 h-4" />
              </div>

              <button className="mt-4 w-full px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
                Update Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
                </>
  );
}
