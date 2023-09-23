import {React, useState, useEffect} from "react";
import TopNavBar from "../component/Global/TopNavBar";
import Addformdetails from "../services/api"
// import TextField from '@mui/material/TextField';
import Footer from "../component/Global/Footer"
import "../assets/css/form.css"
export default function Dashboard() {

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    age:"",
    address:""
  });
 
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length != 0) {
      setErrors({});
    }
  }, [formData]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  /*=====[ # Validation # ]=====*/

  const validateForm = () => {

    let validationErrors = {};
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (formData.name == "") {
      validationErrors.name = "User name can not be empty!";
    }
    else if (formData.name.length < 4) {
      validationErrors.name = "User name Must be 4 Character";
    }
    else if (formData.email == "") {
      validationErrors.email = "Email can not be empty!";
    }
    else if (!emailPattern.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }
    else if (formData.age == "") {
      validationErrors.age = "Age can not be empty!";
    }
    else if (formData.address == "") {
      validationErrors.address = "Adrress can not be empty!";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  /*=====[ # Travel plan Add Function  # ]=====*/

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // var form = $('#meeting_formdata')[0];
      //   var data = new FormData(form);
      // const data = {
      //   username: formData.username,
      //   password: formData.password
      // };
      console.log(formData);
      // return;
      Addformdetails.addformdata(formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
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
              <form className="card" id="form">

                <div className="card-header">
                  <p>Add Form</p>
                </div>

                <div className="input-group">

                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="name" id="" placeholder="" value={formData.name} onChange={handleChange}/>
                      <label for="">Name</label>
                      <span className="text-danger">{errors.name}</span>
                      {/* <span>{}</span> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" name="email" id="" placeholder="" value={formData.email} onChange={handleChange}/>
                      <label for="">Email</label>
                      <span className="text-danger">{errors.email}</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="number" class="form-control" name="age" id="" placeholder="" value={formData.age} onChange={handleChange}/>
                      <label for="">Age</label>
                      <span className="text-danger">{errors.age}</span>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control" name="address" id="" rows={10} cols={20} placeholder="" value={formData.address} onChange={handleChange}/>
                      <label for="">Address</label>
                      <span className="text-danger">{errors.address}</span>
                    </div>
                  </div>
                  <div className="ml-aut">
                    <button type="button" className="btn btn-success" onClick={handleLoginSubmit}>Submit</button>
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

