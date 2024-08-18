// src/Navbar.js
import { Link } from 'react-router-dom';
import './App.css'; // Make sure to add any styles for the navbar here

function Navbar() {
  return (
  
    <nav className="navbar">
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/display">Display</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
