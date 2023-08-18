import React,{useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../../assets/css/TopNavBar.css'
import { Link } from 'react-router-dom';
import { logout } from "../../slices/auth";
function Navbar() {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <nav className='topnav'>
      <ul className='topnav_menu'>
        <li className=''>Tittle</li>
        <li title='Log Out'><Link to="/" onClick={logOut}>LogOut</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;