import React,{useState, useEffect } from "react";
import "../../assets/css/Login.css";
import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";
// import fooderimage from "./images/img-6.png";
import Social from "../../component/login/Social";
import { Link,useNavigate } from "react-router-dom";
import { register } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"

export default function RegisterForm() {

    const [signupdata, setSignupdata] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [errors, setErrors] = useState({});
    let navigate = useNavigate();
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const [successful, setSuccessful] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length != 0) {
            setErrors({});
        }
    }, [signupdata]);

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    /*=====[ # Validation # ]=====*/

    const validateForm = () => {
        let validationErrors = {};
        const mailpattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
        if (signupdata.username == "") {
            validationErrors.username = "User name can not be empty!";
        }
        else if (signupdata.username.length < 4) {
            validationErrors.username = "User name Must be 4 Character";
        }
        else if (signupdata.email == "") {
            validationErrors.email = "Email can not be empty!";
        }

        // else if (signupdata.email == test(mailpattern)) {
        //     validationErrors.email = "Email can be Valid!";
        // } 

        else if (signupdata.password == "") {
            validationErrors.password = "Password can not be empty!";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    /*=====[ # Travel plan Add Function  # ]=====*/

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        let isFormValid = validateForm();
        const data = {
            username: signupdata.username,
            email:signupdata.email,
            password: signupdata.password,
          };
          console.log(data);
        if (isFormValid) {
            console.log(signupdata);
            
            setSuccessful(false);

            dispatch(register(data))
                .unwrap()
                .then(() => {
                    navigate("/addformdata");
                    alert("Succesful");
                    setSuccessful(true);
                })
                .catch(() => {
                    alert("Fail");
                    setSuccessful(false);
                    window.location.reload();
                });
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

                                    <h3>Create an account</h3>

                                    {/* <div
                                            className="alert alert-success alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <strong>Congrats,</strong> your account has been created!
                                            <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            ></button>
                                        </div> */}


                                    <form id="">
                                        <div className="form-group position-relative clearfix">
                                            <input
                                                name="username"
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"
                                                aria-label="Full Name"
                                                value={signupdata.username}
                                                onChange={handleChange}
                                            />
                                            <span className="text-danger">{errors.username}</span>
                                        </div>

                                        <div className="form-group position-relative clearfix">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                aria-label="Email Address"
                                                value={signupdata.email}
                                                onChange={handleChange}
                                            />
                                            <div
                                                className="login-popover login-popover-abs"
                                                data-bs-toggle="popover"
                                                data-bs-trigger="hover"
                                                title="Clarification"
                                                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                            >
                                                <i className="fa fa-info-circle"></i>
                                            </div>
                                            <span className="text-danger">{errors.email}</span>
                                        </div>

                                        <div className="form-group clearfix position-relative password-wrapper">
                                            <input
                                                name="password"
                                                type={passwordVisible ? 'text' : 'password'}
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Password"
                                                aria-label="Password"
                                                value={signupdata.password}
                                                onChange={handleChange}
                                            />
                                           <span onClick={togglePasswordVisibility}>
                                                {passwordVisible ? <AiFillEye className="password-indicator"/> :
                                                <AiFillEyeInvisible className="password-indicator"/>
                                                }
                                            </span>
                                            <span className="text-danger">{errors.password}</span>
                                        </div>

                                        <div className="form-group checkbox clearfix">
                                            <div className="clearfix float-start">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="rememberme"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="rememberme"
                                                    >
                                                        I agree to the terms of service
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group clearfix mb-0">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg btn-theme"
                                                onClick={handleSignupSubmit}
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <div className="extra-login clearfix">
                                            <span>Or Login With</span>
                                        </div>
                                    </form>
                                    <div className="clearfix"></div>

                                    <Social />

                                    <p>
                                        Already a member? <Link to="/">Login here</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                            {/* <div className="col-lg-6 align-self-center form-text">
                                <div className="info clearfix align-self-center">
                                    <h2 className="animate-charcter">Programming isn't about what you know,it's about what you can figure out</h2>
                                    
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {message && (
                    <div className="form-group">
                        <div
                            className={
                                successful ? "alert alert-success" : "alert alert-danger"
                            }
                            role="alert"
                        >
                            {message}
                        </div>
                    </div>
                )}
                {/* <!-- Login 6 end --> */}
            </section>
        </>
    );
}
