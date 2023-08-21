import React, { useEffect,useState } from "react";
import "../assets/css/Login.css";
import Social from "../component/Login/Social"
// import fooderimage from "./images/img-6.png";
import { Link } from "react-router-dom";


export default function ForgotPassword() {

    const [forgetData, setForgetdata] = useState({
        email: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.keys(errors).length != 0) {
            setErrors({});
        }
    }, [forgetData]);

    const validateForm = () => {
        let validationErrors = {};

        if (forgetData.email == "") {
            validationErrors.email = "Email can not be empty!";
        }
       

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForgetdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleForgetSubmit = (e) => {
        e.preventDefault();

        let isFormValid = validateForm();
        // const data ={
        //     username : loginData.username,
        //     password : loginData.password
        // }
        if (isFormValid) {
            console.log(forgetData);
            //   setLoading(true);

            // dispatch(login(data))
            // .unwrap()
            // .then(() => {
            //     console.log(login);
            //     alert("success");
            //   navigate("/addform");
            //   window.location.reload();
            // })
            // .catch(() => {
            //     alert("fail");
            // //   setLoading(false);
            // });
        } 
    };
    return (
        <>
            <section>
                {/* <!-- Login 6 start --> */}
                <div className="login-25">
                    <div className="container">
                        <div className="row login-box">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 form-section">
                                <div className="form-inner">
                                    <a href="login-25.html" className="logo">
                                        <img src="assets/img/logos/logo-2.png" alt="logo" />
                                    </a>
                                    <h3>Recover Your Password</h3>
                                    {/* <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Congrats,</strong> and email has been sent to your email.
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div> */}
                                    <form action="#" method="POST" id="commonForm">

                                        <div className="form-group position-relative clearfix">
                                            <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" value={forgetData.email}
                                                onChange={handleChange} />
                                            <div className="login-popover login-popover-abs" data-bs-toggle="popover" data-bs-trigger="hover" title="Clarification" data-bs-content="And here's some amazing content. It's very engaging. Right?">
                                                <i className="fa fa-info-circle"></i>
                                            </div>
                                            <span className="text-danger">{errors.email}</span>
                                        </div>

                                        <div className="form-group clearfix mb-0">
                                            <button type="submit" className="btn btn-primary btn-lg btn-theme" onClick={handleForgetSubmit}>Send Me Email</button>
                                        </div>
                                        <div className="extra-login clearfix">
                                            <span>Or Login With</span>
                                        </div>
                                    </form>
                                    <div className="clearfix"></div>
                                    <Social />
                                    <p>Already a member?   <Link to="/">Login here</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                            {/* <div className="col-lg-6 align-self-center form-text">
                                <div className="info clearfix align-self-center">
                                    <h1 className="animate-charcter">We Make Spectacular</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type scrambled it to make</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Login 6 end --> */}
            </section>
        </>
    );
}
