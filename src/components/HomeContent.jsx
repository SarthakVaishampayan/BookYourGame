// /* eslint-disable no-unused-vars */
// import React from 'react'

// const App = () => {
//   return (
//     <div className='absolute  left-3/4 top-2/4  text-center  justify-center text-4xl'>
//       <button className=' w-48 h-16  bg-red-700 opacity-55 p-2 rounded-2xl' >Book Now </button>
//     </div>
//   )
// }

// export default App

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from "react-router-dom";

function App() {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className="bg-gradient-to-br flex-col items-center absolute right-60 top-1/3 justify-center">

      <div className='text-7xl text-center font-sans mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500'>
        Your Game <br/> Your Time
      </div>
      <Link className="flex justify-center" to="/booknow">
      <button
        onClick={handleClick}
        className={`
          group relative flex items-center gap-2 px-8 py-4
          bg-gradient-to-r from-green-400 to-blue-500 bg-opacity-10 
          text-white font-semibold rounded-lg
          transform transition-all duration-200
          hover:scale-105 hover:shadow-lg
          active:scale-95 active:shadow-inner
          ${isPressed ? 'scale-95' : ''}
          `}
          >
        <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
        <span className="text-lg">Book Now</span>
        <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
        </Link>
    </div>
  );
}

export default App;