import React from "react";
import TopNavBar from "../component/Global/TopNavBar";
import Card from "../component/main/card"
// import TextField from '@mui/material/TextField';
import Footer from "../component/Global/Footer"
import "../assets/css/form.css"
export default function dashboard() {
  // const classNameForChild = 'main-page';
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target); // Get form data
  
    // Get form field values
    const name = formData.get('name');
    const email = formData.get('email');
    const age = formData.get('age');
    const address = formData.get('address');
  
    // Perform validation
    if (!name || !email) {
      alert('Please fill in all required fields.');
      return; // Stop form submission if validation fails
    }
  
    // Perform further validation if needed (e.g., email format)
  
    // If validation passes, you can proceed with your desired action
    console.log('Name:', name);
    console.log('Email:', email);
  
    // Clear the form or update state as needed
  };
  
  
  return (
    <>
      <TopNavBar pageActive="Dashboard" />
      <div className="main-page">
        <section className="side-app">

          <div className="page-header">
            <div className="container">
              <p className="page-head-title">Add Multiple Inputs Form</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form className="card" onSubmit={handleSubmit}>

                <div className="card-header">
                  <p>Add Form</p>
                </div>

                <div className="input-group">

                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="name" id="" placeholder="" />
                      <label for="">Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" name="email" id="" placeholder="" />
                      <label for="">Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="number" class="form-control" name="age" id="" placeholder="" />
                      <label for="">Age</label>
                    </div>
                  </div>
                 
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control" name="address" id="" rows={8} cols={20} placeholder=""/>
                      <label for="">Address</label>
                    </div>
                  </div>
                  <div className="ml-auto">
                  <button type="button" className="btn btn-success">Submit</button>
                  </div>
                </div>
              </form>
            </div>

          </div >

        </section >

      </div >
      <Footer />
    </>

  );

}

