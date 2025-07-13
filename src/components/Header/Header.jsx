import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/count">Count</Link>
        
      </nav>
      <header className="header">
        <h1>FarmFord Krishi Farm</h1>
        <p>Fresh. Organic. Local.</p>
      </header>
    


  </div>
  )
}

export default Header;
