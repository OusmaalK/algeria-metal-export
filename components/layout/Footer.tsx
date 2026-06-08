'use client';

import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ALGERIA METAL</h3>
            <p className="text-gray-400">EXPORT SOLUTIONS</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Logistics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quality & Certification</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@algeriametal.com</li>
              <li>Phone: +213 555 12 34 56</li>
              <li>Address: Algeria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2026 Algeria Metal Export Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};