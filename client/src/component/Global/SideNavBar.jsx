import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../assets/css/SideNavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiSolidDashboard } from "react-icons/bi";

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
      <div className='main-logo'>Example Company</div>
        <ul className="side-menu">
          <li>
            <h3>Main</h3>
          </li>

          <li className="slide" title="Dashboard">
            <Link
              to="/Dashboard"
              className="side-menu__item">
               <BiSolidDashboard style={{fontSize:"25px"}} className="ri"/>
              {/* <FontAwesomeIcon icon="coffee" style={{fontSize:"25px"}} className="f-i" /> */}
              <span className="side-menu__label">
                 Dashboard
              </span>
            </Link>
          </li>

          <li>
            <h3 className="side-menu__label">CRUD &amp; Validation</h3>
          </li>

          {showUserBoard && (
            <li>
              <Link to="/addform" className="side-menu__item">
                <i className="side-menu__icon fa fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                  </span>
                  Add Form
                </span>
              </Link>
            </li>
          )}

            <li>
              <Link to="/displaydata" className="side-menu__item">
                <i className="side-menu__icon f fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                    &#10146;
                  </span>{" "}
                  Data Table
                </span>
              </Link>
            </li>
            <li>
              <Link to="/displaydata" className="side-menu__item">
                <i className="side-menu__icon f fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                    &#10146;
                  </span>{" "}
                  Data Table
                </span>
              </Link>
            </li>
            <li>
              <Link to="/displaydata" className="side-menu__item">
                <i className="side-menu__icon f fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                    &#10146;
                  </span>{" "}
                  Data Table
                </span>
              </Link>
            </li>
            <li>
              <Link to="/displaydata" className="side-menu__item">
                <i className="side-menu__icon f fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                    &#10146;
                  </span>{" "}
                  Data Table
                </span>
              </Link>
            </li>
            <li>
              <Link to="/displaydata" className="side-menu__item">
                <i className="side-menu__icon f fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                    &#10146;
                  </span>{" "}
                  Data Table
                </span>
              </Link>
            </li>
            <li>
              <Link to="/displaydata" className="side-menu__item">
                <i className="side-menu__icon f fa-grid"></i>
                <span className="side-menu__label">
                  <span style={{ fontSize: "20px", marginTop: "100px" }}>
                    &#10146;
                  </span>{" "}
                  Data Table
                </span>
              </Link>
            </li>
          
          <li>
            <h3>Elements</h3>

          </li><li className="slide">
            <a className="side-menu__item active" onClick={toggleAccordion}>
              <i className="side-menu__icon fa fa-database"></i>
              <span className="side-menu__label">Component</span>
              <i className="angle fa fa-angle-right"></i>
            </a>
            {isExpanded && (
              <ul className="slide-menu">
                <li>
                  <a href="#" className="slide-item">

                    Cards design
                  </a>
                </li>

                <li className="active">
                  <a href="#" className="slide-item active">

                    Default calendar
                  </a>
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
