import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../assets/css/SideNavBar.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiSolidDashboard } from "react-icons/bi";
import { RiFileAddFill } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
export default function SideNavBar(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevstate) => !prevstate);
  };
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);


  const { user: currentUser } = useSelector((state) => state.auth);


  useEffect(() => {
    if (currentUser) {
      // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"));
    } else {
      // setShowModeratorBoard(false);
      // setShowAdminBoard(false);
      setShowUserBoard(false);
    }
  }, [currentUser]);

     console.log(props.closeMenu);



  return (
    <>
      <aside className={props.closeMenu === false ? "app-sidebar ps" : "activate ps"} >

        <div className='main-logo'>
          <div className="sub-logo">
            <BiSolidDashboard  className="react-icon" />
            <span className="side-menu__label">Example Company</span>
          </div>
        </div>

        <ul className="side-menu">

          <h3 className="side-menu__label">Main</h3>
          <li className="slide" title="Dashboard">
            <Link
              to="/Dashboard"
              className="side-menu__item">
              <BiSolidDashboard  className="react-icon" />
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
                to="/addform"
                className="side-menu__item">
                <RiFileAddFill  className="react-icon" />
                <span className="side-menu__label">
                  Add Form
                </span>
              </Link>
            </li>
          )}

          <li className="slide" title="Dashboard">
            <Link
              to="/displaydata"
              className="side-menu__item">
              <CgDatabase  className="react-icon" />
              <span className="side-menu__label">
                Display Data
              </span>
            </Link>
          </li>


          <li>
            <h3 className="side-menu__label">Elements</h3>

          </li><li className="slide">
            <a className="side-menu__item active" onClick={toggleAccordion}>
              <i className="side-menu__icon fa fa-database"></i>
              <span className="side-menu__label">Component</span>
              {
                isExpanded == false ? <i className="angle fa fa-angle-right"></i> : <i className="angle fa fa-angle-down"></i>
              }

            </a>
            {isExpanded && (
              <ul className="slide-menu accordion-drop">
                <li className="slide" title="Dashboard">
                  <Link
                    to="/displaydata"
                    className="side-menu__item">
                    <CgDatabase className="react-icon" />
                    <span className="side-menu__label">
                      Display Data
                    </span>
                  </Link>
                </li>

                <li className="slide" title="Dashboard">
                  <Link
                    to="/displaydata"
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
