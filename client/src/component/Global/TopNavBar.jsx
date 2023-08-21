import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../../assets/css/TopNavBar.css'
import { Link } from 'react-router-dom';
import { logout } from "../../slices/auth";
import SideNavBar from "../Global/SideNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);


  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
    // alert('hai');
    // console.log(!closeMenu);
  };

  return (
    <nav className='topnav'>
      <div className='d-flex main-top-menu justify-content-start'>
        <div onClick={handleCloseMenu} className=''>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
        <div className='main-top-submenu d-flex'>
          <div className='top-submenu logout' title='Log Out'><Link to="/" onClick={logOut}>LogOut</Link></div>
        </div>
        <SideNavBar closeMenu={closeMenu} />
      </div>
      {/* <ul className='topnav_menu '>
         <li className=''>Example Company</li>

        <li onClick={handleCloseMenu} className='icon'><FontAwesomeIcon icon="fa-solid fa-bars" /></li>
        <li className=''>Tittle</li>
        <li title='Log Out' className='d-flex justify-content-end'><Link to="/" onClick={logOut}>LogOut</Link></li>
        <SideNavBar closeMenu={closeMenu}/>
      </ul> */}
    </nav>
  );
}

export default Navbar;