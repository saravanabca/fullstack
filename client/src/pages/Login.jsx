import { React, useState, useEffect } from "react";
import "../assets/css/Login.css";
import Social from "../component/Login/Social";
import { Link, useNavigate } from "react-router-dom";
import { clearMessage } from "../slices/message";
import { useDispatch } from "react-redux";
import { login } from "../slices/auth";
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import Loader from "../component/main/loader";
export default function LoginForm() {
    /*=====[ # Declare a State Variable  # ]=====*/
 const [loginData, setLogindata] = useState({
        username: "",
        password: "",
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    let navigate = useNavigate();
    const [loderstatus, setLoderstatus] = useState(false);
    // const { message } = useSelector((state) => state.message);
    const changeLoaderStatus = (value) => {
        console.log(value);
        setLoderstatus(value);
      };

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.keys(errors).length != 0) {
            setErrors({});
        }
    }, [loginData]);

    useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogindata((prevState) => ({
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

        if (loginData.username == "") {
            validationErrors.username = "User name can not be empty!";
        }
        else if (loginData.username.length < 4) {
            validationErrors.username = "User name Must be 4 Character";
        }
        else if (loginData.password == "") {
            validationErrors.password = "Password can not be empty!";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
        
    };

    /*=====[ # Travel plan Add Function  # ]=====*/

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
     
        if (validateForm()) {
          const data = {
            username: loginData.username,
            password: loginData.password
          };
      
          try {
            changeLoaderStatus(true);
            await dispatch(login(data)).unwrap();
            // alert(data);
            
            navigate("/Dashboard");
            window.location.reload();
          } catch (error) {
            alert(error);
            console.log(error);
            window.location.reload();
          }
          finally{
            changeLoaderStatus(false);
          }
        }
      };
   
      

    return (
        <>
         <Loader loderstatus={loderstatus} />
            <section>
                <div className="login-25">
                    <div className="container">
                        <div className="row login-box">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 form-section">
                                <div className="form-inner">
                                    {/* <a href="login-25.html" className="logo">
                                        <img src="assets/img/logos/logo-2.png" alt="logo" />
                                    </a> */}
                                    <span>Simple Explore</span>
                                    <h3>Sign Into Your Account</h3>

                                    {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                   <strong>Sorry,</strong> Something went wrong!
                                   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                               </div> */}

                                    <form id="commonForm">
                                        <div className="form-group position-relative clearfix ">
                                            <input
                                                name="username"
                                                type="text"
                                                className="form-control inpu-focus"
                                                placeholder="UserName"
                                                aria-label=""
                                                autoComplete="off"
                                                value={loginData.username}
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
                                            <span className="text-danger">{errors.username}</span>
                                        </div>
                                        
                                        <div className="form-group clearfix position-relative password-wrapper">
                                            <input
                                                name="password"
                                                type={passwordVisible ? 'text' : 'password'}
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Password"
                                                aria-label="Password"
                                                value={loginData.password}
                                                onChange={handleChange}
                                            />
                                            <span onClick={togglePasswordVisibility}>
                                                {passwordVisible ? <AiFillEye className="password-indicator"/> :
                                                <AiFillEyeInvisible className="password-indicator"/>
                                                }
                                            </span>

                                        </div>
                                        <span className="text-danger">{errors.password}</span>

                                        {/* remper */}
                                        <div className="checkbox form-group clearfix">
                                            <div className="form-check float-start">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="rememberme"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="rememberme"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <Link
                                                to="/Forgot"
                                                className="link-light float-end forgot-password"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </div>

                                        <div className="form-group clearfix mb-0">
                                            {/* <Link to="/Dashboard"> */}
                                            <button
                                                type="submit"
                                                id="login"
                                                className="btn btn-primary btn-lg btn-theme"
                                                onClick={handleLoginSubmit}
                                            >
                                                Login
                                            </button>
                                            {/* </Link> */}
                                        </div>

                                        <div className="extra-login clearfix">
                                            <span>Or Login With</span>
                                        </div>
                                    </form>

                                    <div className="clearfix"></div>

                                    <Social />

                                    <p>
                                        Don't have an account?{" "}
                                        <Link to="/Register">Register here</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                            {/* <div className="col-lg-6 align-self-center form-text">
                       <div className="info clearfix align-self-center">
                           <h2 className="animate-charcter">The strength of JavaScript is that you can do anything</h2>
                          
                       </div>
                   </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
