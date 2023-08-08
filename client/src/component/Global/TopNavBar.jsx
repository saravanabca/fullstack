import React from 'react';
import '../../assets/css/TopNavBar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  

  return (
    <nav className='topnav'>
      <ul className='topnav_menu'>
        <li title='Log Out'><Link to="/">LogOut</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;