import { React, useState } from "react";
import "../../assets/css/SideNavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideNavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevstate) => !prevstate);
  };

  return (
    <>
      <aside className="app-sidebar ps ps--active-y ">
        <ul className="side-menu">
          <li>
            <h3>Main</h3>
          </li>

          <li className="slide" title="Dashboard">
            <Link
              to="/Dashboard"
              className="side-menu__item"
              data-bs-toggle="slide">
              <span className="side-menu__label">
                <FontAwesomeIcon icon="coffee" size="1x" className="f-i" /> Dashboard
              </span>
            </Link>
          </li>

          <li>
            <h3>CRUD &amp; Validation</h3>
          </li>

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

          {/* <li>
            <Link to="/tutorials" className="side-menu__item" href="#"><i className="side-menu__icon f fa-grid"></i><span className="side-menu__label"><span style={{fontSize:'20px',marginTop:'100px'}}>&#10146;</span> Data Table</span></Link>
          </li> */}

          <li>
            <h3>Elements</h3>
          </li>

          <li className="slide">
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




          

          {/* <div>
      <button onClick={toggleAccordion}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && <div>Content to be displayed when expanded.</div>}
    </div> */}
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
