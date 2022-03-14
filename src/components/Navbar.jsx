import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className="navbar">
    <h3 className='navbar-title'>SHINOBROS</h3>
    <div className='navbar-menu'>
      <Link to='/' className="menu">home</Link>
      <Link to='/story' className="menu">story</Link>
      <div className="menu">gallery</div>
      <div className="menu">mindmap</div>
      <div className="menu">shop</div>
    </div>
  </div>
);
