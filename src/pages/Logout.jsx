/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const LogoutPage = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleLoginClick = () => {
    setShowLoginDialog(true);
  };

  const handleCloseDialog = () => {
    setShowLoginDialog(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-8">You have been logged out</h1>
        <button
          onClick={handleLoginClick}
          className="bg-purple-600 hover:bg-purple-700 p-2 rounded"
        >
          Login
        </button>

        {showLoginDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black">
              
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Your password"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded">
                  Login
                </button>
              </form>
              <button
                onClick={handleCloseDialog}
                className="mt-4 w-full bg-gray-600 hover:bg-gray-700 p-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LogoutPage;
