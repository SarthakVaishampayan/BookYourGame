
/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "../components/Navbar";

const u_bookings = [
    { id: 1, console: "PlayStation 5", date: "2025-03-10", time: "14:00 - 16:00" },
    { id: 2, console: "Xbox Series X", date: "2025-03-12", time: "10:00 - 12:00" },
    { id: 3, console: "Nintendo Switch", date: "2025-03-15", time: "18:00 - 20:00" },
    { id: 4, console: "Gaming PC", date: "2025-03-18", time: "15:00 - 17:00" },
    { id: 5, console: "PlayStation 4 Pro", date: "2025-03-20", time: "19:00 - 21:00" },
    { id: 6, console: "Xbox One X", date: "2025-03-25", time: "12:00 - 14:00" },
    { id: 7, console: "VR Gaming Setup", date: "2025-03-28", time: "16:00 - 18:00" },
    { id: 8, console: "PlayStation 3", date: "2025-03-30", time: "10:00 - 12:00" },
    
   
];
const p_bookings = [
       
    { id: 17, console: "PlayStation 5", date: "2024-06-28", time: "16:00 - 18:00" },
    { id: 18, console: "Xbox One X", date: "2024-07-01", time: "14:00 - 16:00" },
    { id: 19, console: "PlayStation 4 Pro", date: "2024-07-03", time: "19:00 - 21:00" },
    { id: 20, console: "PlayStation VR2", date: "2024-07-05", time: "11:00 - 13:00" },
];


const parlourNames = [
  "Pixel Arcade",
  "Game Haven",
  "Level Up Lounge",
  "HyperX Arena",
  "Retro Play Zone",
  "The Gaming Vault",
  "Console Kingdom",
  "Arcadia Hub",
];


const getRandomParlour = () => {
  return parlourNames[Math.floor(Math.random() * parlourNames.length)];
};

export default function BookingsPage() {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Upcoming Bookings</h1>
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3">
          {u_bookings.map((booking) => (
            <div key={booking.id} className="bg-black bg-opacity-55 backdrop-blur-sm border p-4 rounded-lg shadow">
              <h2 className="text-lg text-white font-semibold mt-2">
                 {getRandomParlour()}
              </h2>
              <p className="text-lg text-gray-400 font-semibold mb-2">{booking.console}</p>
              <p className="text-sm text-gray-400">Date: {booking.date}</p>
              <p className="text-sm text-gray-400">Time: {booking.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Previous Bookings</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {p_bookings.map((booking) => (
            <div key={booking.id} className="bg-black bg-opacity-55 backdrop-blur-sm border p-4 rounded-lg shadow">
              <h2 className="text-lg text-white font-semibold mt-2">
                 {getRandomParlour()}
              </h2>
              <p className="text-lg text-gray-400 font-semibold mb-2">{booking.console}</p>
              <p className="text-sm text-gray-400">Date: {booking.date}</p>
              <p className="text-sm text-gray-400">Time: {booking.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
