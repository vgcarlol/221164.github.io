import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú desplegable

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        &#9776; {/* Ícono del menú */}
      </div>
      <div className={`nav-items ${isOpen ? 'nav-active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
