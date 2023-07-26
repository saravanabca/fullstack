import React from 'react';
import './TopNavBar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  

  return (
    <nav className='topnav'>
      <ul className='topnav_menu'>
        <li title='Log Out'><Link to="/">LogOut</Link></li>
        {/* <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;