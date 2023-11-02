import { React, useState, useEffect, useRef } from "react";
import TopNavBar from "../../component/main/TopNavBar";
import Addformdetails from "../../services/api";
import Loader from "../../component/main/Loader";
// import TextField from '@mui/material/TextField';
import Footer from "../../component/main/Footer"
import "../../assets/css/addformdata.css"

export default function AddFormData() {

  const [formData, setFormData] = useState(new FormData());
  const myFormRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [loderstatus, setLoderstatus] = useState(false);
  // const Loader = Loader;
  // useEffect(() => {
  //   if (Object.keys(errors).length != 0) {
  //     setErrors({});
  //   }
  // }, [formData]);
  const changeLoaderStatus = (value) => {
    console.log(value);
    setLoderstatus(value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formData.set(name, value);
    setFormData(formData);
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      changeLoaderStatus(true);
    });
  }, []);
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormdata((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };


  /*=====[ # Validation # ]=====*/

  const validateForm = () => {

    let validationErrors = {};
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    changeLoaderStatus(true);
    if (!formData.get('name')) {
      console.log(!formData.get('name'));
      validationErrors.name = "User name can not be empty!";
    }
    else if (formData.get('name').length < 4) {
      validationErrors.name = "User name Must be 4 Character";
    }
    else if (!formData.get('email')) {
      validationErrors.email = "Email can not be empty!";
    }
    else if (!emailPattern.test(formData.get('email'))) {
      validationErrors.email = 'Please enter a valid email address.';
    }
    else if (!formData.get('age')) {
      validationErrors.age = "Age can not be empty!";
    }
    else if (!formData.get('address')) {
      validationErrors.address = "Adrress can not be empty!";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  /*=====[ # Travel plan Add Function  # ]=====*/

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const object = {};
    for (const [key, value] of formData.entries()) {
      console.log(value);
      object[key] = value;
    }
    if (validateForm()) {
      // var form = $('#meeting_formdata')[0];
      //   var data = new FormData(form);
      // const data = {
      //   username: formData.username,
      //   password: formData.password
      // };
      console.log(formData);
      // return;
      changeLoaderStatus(true);
      await Addformdetails.addformdata(object)
        .then(response => {
          changeLoaderStatus(false);
          console.log(response)
          myFormRef.current.reset();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <Loader loderstatus={loderstatus} />
      <TopNavBar pageActive="addform" /><div className="main-page">
        <section className="side-app">

          <div className="page-header">
            <div className="container">
              <p className="page-head-title">Add Multiple Inputs Form</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form className="card" id="form" onSubmit={handleFormSubmit} ref={myFormRef}>

                <div className="card-header">
                  <p>Add Form</p>
                </div>

                <div className="input-group">

                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="name" id="" placeholder="" value={formData.name} onChange={handleInputChange} />
                      <label for="">Name</label>
                      <span className="text-danger">{errors.name}</span>
                      {/* <span>{}</span> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" name="email" id="" placeholder="" value={formData.email} onChange={handleInputChange} />
                      <label for="">Email</label>
                      <span className="text-danger">{errors.email}</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <input type="number" class="form-control" name="age" id="" placeholder="" value={formData.age} onChange={handleInputChange} />
                      <label for="">Age</label>
                      <span className="text-danger">{errors.age}</span>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control" name="address" id="" rows={10} cols={20} placeholder="" value={formData.address} onChange={handleInputChange} />
                      <label for="">Address</label>
                      <span className="text-danger">{errors.address}</span>
                    </div>
                  </div>
                  <div className="ml-aut">
                    <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                </div>
              </form>
            </div>

          </div>

        </section>

      </div>
      <Footer />
    </>

  );

}

