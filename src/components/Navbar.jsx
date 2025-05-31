import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-blue-400">Prime Properties</div>

        {/* Center: Links (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
        </ul>

        {/* Right: Button (Hidden on small screens) */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300">Contact Us</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer text-blue-400" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-800 w-full px-6 py-4 space-y-4 text-center shadow-md">
          <a href="#home" className="block text-gray-300 hover:text-blue-400">Home</a>
          <a href="#about" className="block text-gray-300 hover:text-blue-400">About</a>
          <a href="#services" className="block text-gray-300 hover:text-blue-400">Services</a>
          <a href="#agents" className="block text-gray-300 hover:text-blue-400">Agents</a>
          <a href="#contact" className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
