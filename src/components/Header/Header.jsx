import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-lg animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="FarmFord Logo"
                className="h-12 w-12 object-cover rounded-full border-4 border-green-200 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="text-green-800 text-2xl font-extrabold tracking-wide hidden sm:inline animate-slide-down">
                FarmFord
              </span>
            </Link>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
              <NavItem to="/" label="Home" active={location.pathname === '/'} idx={0} />
              <NavItem to="/product" label="Products" active={location.pathname.startsWith('/product')} idx={1} />
              <NavItem to="/about" label="About Us" active={location.pathname.startsWith('/about')} idx={2} />
              <NavItem to="/contact" label="Contact" active={location.pathname.startsWith('/contact')} idx={3} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

// Navigation item as a reusable component
const NavItem = ({ to, label, active, idx }) => (
  <Link
    to={to}
    className={`relative text-gray-700 hover:text-green-700 transition-colors duration-200 text-base font-semibold px-4 py-2 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-300 animate-slide-down`}
    style={{ animationDelay: `${100 + idx * 80}ms` }}
  >
    {label}
    {active && (
      <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full animate-fade-in" />
    )}
  </Link>
)

export default Header;
