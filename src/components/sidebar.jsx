/* eslint-disable no-unused-vars */
// //  /* eslint-disable no-unused-vars */

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import userIcon from './user2.png'; // Import the PNG file

// // const Navbar = () => {
// //   const menubar=()=>{
// //     alert("hello");

// //   }
// //   return (
// //     <nav className='w-full h-20 p-2 text-color'>
// //       <div className='h-full text-xl text-center items-center justify-between flex text-white m-2 ml-2 rounded-3xl opacity-70 '>
// //         <div className='ml-10'>BookYourGame</div>
// //         <div>
// //           <div></div>
// //           <div>My Bookings</div>
// //         </div>
// //         <button onClick={menubar} className='mr-10'>

// //         <img src={userIcon} alt="User Icon" className="w-10 h-10 fill-white " />
// //         </button>

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// /* eslint-disable no-unused-vars */

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import userIcon from "./user2.png"; // Import the PNG file

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="w-full h-20 p-2 text-color relative">
//       <div className="h-full text-xl text-center items-center justify-between flex text-white m-2 ml-2 rounded-3xl opacity-70 ">
//         <div className="ml-10">
//         <Link to='/home' >
//         BookYourGame
//             </Link></div>
        

//         {/* Account Button */}
//         <button onClick={toggleMenu} className="mr-10">
//           <img src={userIcon} alt="User Icon" className="w-10 h-10" />
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="absolute top-20 right-10 w-32 bg-black text-white p-2 rounded-lg shadow-lg">
//           <ul className="mt-2 text-center ">
//             <li className="p-2  rounded-xl hover:bg-gray-700 cursor-pointer">
//             <Link to='/profile' >
//               Profile
//             </Link>
//             </li>
           
//             <li  className="p-2  rounded-xl hover:bg-gray-700 cursor-pointer">

//             <Link to='/contact'>
//               Contact Us
//             </Link>
//             </li>
//             <li className="p-2  rounded-xl hover:bg-gray-700 cursor-pointer">

//             <Link to='/logout' >
//               Logout
//             </Link>
//             </li>
            
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import userIcon from "./user2.png"; // Import the PNG file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent triggering window click
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      

        {/* Account Button */}
        <button onClick={toggleMenu} className="mr-10" ref={menuRef}>
          <img src={userIcon} alt="User Icon" className="w-10 h-10" />
        </button>
      

      {menuOpen && (
          <div ref={menuRef} className="absolute top-20 right-10 w-40 bg-black bg-opacity-90 text-white p-2 rounded-xl shadow-lg z-50">
          <ul className="mt-2 text-center space-y-2">
            <li className="p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <Link to='/profile' className="block w-full">Profile</Link>
            </li>
            <li className="p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <Link to='/bookings' className="block w-full">My Bookings</Link>
            </li>
            <li className="p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <Link to='/contact' className="block w-full">Contact Us</Link>
            </li>
            <li className="p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <Link to='/logout' className="block w-full">Logout</Link>
            </li>
          </ul>
        </div>
      )}
   
      </>
  );
};

export default Navbar;

