import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Prime Properties</h2>
          <p>Your trusted partner in real estate. Helping you find your dream home since 2008.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>123 Real Estate Ave,<br />Cityville, ST 12345</p>
          <p className="mt-2">Phone: (123) 456-7890</p>
          <p>Email: info@primeproperties.com</p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.35 3h-1.85v7A10 10 0 0022 12z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.85 4.48 4.48 0 00-7.86 4.1A12.94 12.94 0 013 4.15s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm10 2a2 2 0 110 4 2 2 0 010-4zm-5 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Prime Properties. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
