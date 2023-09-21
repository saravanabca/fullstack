import React from "react";
import TopNavBar from "../component/Global/TopNavBar";
import Card from "../component/main/card"
// import TextField from '@mui/material/TextField';
import Footer from "../component/Global/Footer"
import "../assets/css/form.css"
export default function dashboard() {
  // const classNameForChild = 'main-page';
  const handleSubmit = (event) => {
    alert('hai');
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target); // Get form data

    // Get form field values
    const name = formData.get('name');
    const email = formData.get('email');
    // const age = formData.get('age');
    // const address = formData.get('address');
    console.log('Name:', name);
    console.log('Email:', email);
    // Validation checks
    const validationErrors = {};
  
    if (!name) {
      validationErrors.name = 'Please enter your name.';
    }
  
    if (!email) {
      validationErrors.email = 'Please enter your email.';
    } else {
      // Validate email format using a regular expression
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        validationErrors.email = 'Please enter a valid email address.';
      }
    }
    console.log('Validation Errors:', validationErrors);
    // Add more validation checks for other fields if needed
  
    // Check if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      // Display validation error messages
      // error=validationErrors;
      console.log('Validation Errors:', validationErrors);
      return; // Stop form submission if validation fails
    }
  
    // If validation passes, you can proceed with your desired action
   
  
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
                      {/* <span>{}</span> */}
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
                      <textarea class="form-control" name="address" id="" rows={10} cols={20} placeholder=""/>
                      <label for="">Address</label>
                    </div>
                  </div>
                  <div className="ml-aut">
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

