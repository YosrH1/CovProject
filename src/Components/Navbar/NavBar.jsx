import React from "react";
import logo from '../../assets/volant.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
    {/* navabr1 */}
    
    <nav className="bg-white-900 text-white px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-9">
        <img src={logo} alt="Carpool Logo" className="h-15 w-10" />
        <span className="text-xl font-bold" style={{color:'rgb(254, 197, 82)',marginRight:'-7px'}} >Car</span>
        <span className="text-xl font-bold text-blue-900">pool</span>
      </div>

      <div className="flex items-center max-w-md mx-auto mt-2 ml-20">
      {/* Input Field */}
      <input
        type="text"
        placeholder=" 📍Tell us Your Location..."
        className="w-full h-9 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      {/* Search Button */}
      <button className="bg-yellow-400 px-4 py-2 rounded-r-md text-white hover:bg-yellow-500 h-9">
        🔍
      </button>
    </div>
    <div className="flex items-center space-x-4 ml-4">
       
        
        <div className="flex items-center space-x-6 ml-9 ">
            {/* Home Link */}
            <Link to="/"
               
                className="flex items-center text-gray-700 hover:text-yellow-400 font-medium transition duration-200">
                <span className="ml-2">Home</span>
            </Link>

            {/* About Link */}
            <Link to=""
                
                className="flex items-center text-gray-700 hover:text-yellow-400 font-medium transition duration-200"
            >
                <span className="ml-2">About</span>
            </Link>

            {/* Contact Link */}

            <Link
                href="/File-Complaine"
                className="flex items-center text-gray-700 hover:text-yellow-400 font-medium transition duration-200">
                <span className="ml-2">Contact</span>
            </Link>


      </div>

      <Link
          to="/get-ride"
          className="text-gray-700 hover:text-yellow-400 font-medium transition duration-200"
        >
          Find a Ride
        </Link>
        <Link
          to="/Post-ride"
          className="text-gray-700 hover:text-yellow-400 font-medium transition duration-200"
        >
          Post a Carpool 
        </Link>
 
        <a
          to="" style={{background:'#393C69'}}
          className="px-4 py-3 rounded-md text-white hover:text-yellow-400 font-medium transition duration-200"
        >
          Ride With Carpool
        </a>
      </div>


    </nav>
    
    </>
  );
};

export default Navbar;
