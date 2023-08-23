import React from "react";
import TopNavBar from "../component/Global/TopNavBar";
import Card from "../component/main/card"
import "../assets/css/form.css"
export default function dashboard() {
  const main = ""
  return (
    <>
      <TopNavBar pageActive="Dashboard"/>
      <div className="main-page">
        <section className="side-app">
          <div className="page-header">
            <div className="container">
              <p className="page-head-title">Add Multiple Inputs Form</p>
              {/* <button></button>  */}

            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form className="card">

                <div className="card-header">
                  <p>Add Form</p>
                </div>

                <div className="input-group">
                <input type="datetime-local" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="time" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="text" placeholder="Enter Your Name" name="name" className="name input-box" />
                <input type="image" />
                </div>

              </form>
            </div>

          </div>
        </section>

      </div>
    </>

  );

}

