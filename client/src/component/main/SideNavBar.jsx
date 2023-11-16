import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../assets/css/SideNavBar.css";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { RiFileAddFill } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {SiWebmoney} from "react-icons/si";



export default function SideNavBar(props) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevstate) => !prevstate);
  };
 
  const [showUserBoard, setShowUserBoard] = useState(false);


  const { user: currentUser } = useSelector((state) => state.auth);


  useEffect(() => {
    if (currentUser) {
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"));
    } else {
      setShowUserBoard(false);
    }
  }, [currentUser]);




  return (
    <>
      <aside className={props.closeMenu === false ? "app-sidebar ps" : "activate ps"} >

        <div className='main-logo'>
          <div className="sub-logo">
            <SiWebmoney className="react-icon" />
            <span className="side-menu__label">Simple Explore</span>
          </div>
        </div>

        <ul className="side-menu">

          <h3 className="side-menu__label">Main</h3>
          <li className="slide" title="Dashboard">
            <Link
              to="/Dashboard"
              className={props.pageactive === 'Dashboard' ? "active side-menu__item" : "side-menu__item"}>
              <BiSolidDashboard className="react-icon" />
              {/* <FontAwesomeIcon icon="coffee" style={{fontSize:"25px"}} className="f-i" /> */}
              <span className="side-menu__label">
                Dashboard
              </span>
            </Link>
          </li>


          <h3 className="side-menu__label">CRUD &amp; Validation</h3>

          {showUserBoard && (
            <li className="slide" title="Dashboard">
              <Link
                to="/addformdata"
                className={props.pageactive === 'addform' ? "active side-menu__item" : "side-menu__item"}>
                <RiFileAddFill className="react-icon" />
                <span className="side-menu__label">
                  Add Form
                </span>
              </Link>
            </li>
          )}

          <li className="slide" title="Dashboard">
            <Link
              to="/getformdata"
              className={props.pageactive === 'getformdata' ? "active side-menu__item" : "side-menu__item"}>
              <CgDatabase className="react-icon" />
              <span className="side-menu__label">
                Display Data
              </span>
            </Link>
          </li>


          <li>
            <h3 className="side-menu__label">Elements</h3>
            {/* shine */}
          </li><li className="slide ">
            <Link to="" className="side-menu__item" onClick={toggleAccordion}>
              <i className="side-menu__icon fa fa-database"></i>
              <span className="side-menu__label">Component</span>

              {isExpanded == false ? <IoIosArrowForward className="react-icon" />
                : <IoIosArrowDown className="react-icon" />}
            </Link>
            {isExpanded && (
              <ul className="slide-menu accordion-drop">
                <li className="slide" title="Dashboard">
                  <Link
                    to="/datatable"
                    className={props.pageactive === 'datatable' ? "active side-menu__item" : "side-menu__item"}>
                    <CgDatabase className="react-icon" />
                    <span className="side-menu__label">
                      Data Table
                    </span>
                  </Link>
                </li>

                <li className="slide" title="Dashboard">
                  <Link
                    to="#"
                    className="side-menu__item">
                    <CgDatabase className="react-icon" />
                    <span className="side-menu__label">
                      Display Data
                    </span>
                  </Link>
                </li>

              </ul>
            )}
          </li>
        </ul>


        <div className="ps__rail-x " style={{ left: "0px", bottom: "0px" }}>
          <div
            className="ps__thumb-x "
            tabIndex="0"
            style={{ left: "0px", width: "0px" }}
          ></div>
        </div>
        <div
          className="ps__rail-y "
          style={{ top: "0px", height: "577px", right: "0px" }}
        >
          <div
            className="ps__thumb-y"
            tabIndex="0"
            style={{ top: "0px", height: "209px" }}
          ></div>
        </div>

      </aside>
    </>
  );
}
