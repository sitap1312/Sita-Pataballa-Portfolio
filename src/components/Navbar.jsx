import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="links">
      <div className="header">
        <a href="/" className="nav-link">
          <h1>Sita Pataballa</h1>
        </a>
      </div>
      <div className="nav">

        <a href="/">
        🏚 Home
        </a>

        <br />
        
        <a href="#aboutmeId">
        🙂 About Me
        </a>
        
        <br />
        
        <a href="#projectsId">
        ⏳ My Work
        </a>
        
        <br />

        
        <a href="#contactId">
        📨 Contact
        </a>

        <br />

        <a href="https://docs.google.com/document/d/1NMDEo_P_P20niqfR2xIy7GkWQFX4picpnUkrEoNvo44/edit?usp=sharing">
          <button>Resume</button>
        </a>
        
      </div>
    </div>
  )
};

export default Navbar;