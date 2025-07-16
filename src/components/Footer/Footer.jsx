import React from 'react'
import banner from '../../assets/banner.jpg';

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={banner} alt="FarmFord Banner" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 opacity-90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 z-10">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="/" aria-label="Go home" title="FarmFord" className="inline-flex items-center mb-6">
              <span className="text-2xl mr-2">🌾</span>
              <span className="text-xl font-bold tracking-wide text-blue-100 uppercase">FarmFord</span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-blue-100 leading-relaxed">
                FarmFord brings you the freshest organic vegetables and fruits, harvested with care and delivered with love. 
                Support your local farmers and eat healthy.
              </p>
              <p className="mt-4 text-sm text-blue-100 leading-relaxed">
                Three generations of farming expertise, committed to sustainable agriculture and eco-friendly practices.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-base font-bold tracking-wide text-green-200">Contact Info</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">📞</span>
              <a href="tel:+977-9861830956" className="text-blue-100 hover:text-green-300 transition-colors duration-300">
                +977-9861830956
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">✉️</span>
              <a href="mailto:FarmFord@example.com" className="text-blue-100 hover:text-green-300 transition-colors duration-300">
                FarmFord@example.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">📍</span>
              <span className="text-blue-100">Duhabi, Nepal</span>
            </div>
          </div>
          
          <div>
            <span className="text-base font-bold tracking-wide text-green-200">Follow Us</span>
            <div className="flex items-center mt-4 space-x-4">
              <a href="https://www.facebook.com/farmford.krishifarm" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-green-300 transition-colors duration-300" aria-label="Facebook">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-blue-100">
              Stay updated with our latest harvests and farm news.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col-reverse justify-between pt-8 border-t border-blue-900 lg:flex-row">
          <p className="text-sm text-blue-100">
            © 2024 FarmFord. All rights reserved.
          </p>
          <ul className="flex flex-col mb-4 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="/" className="text-sm text-blue-100 hover:text-green-300 transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-blue-100 hover:text-green-300 transition-colors duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-blue-100 hover:text-green-300 transition-colors duration-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
