import { React } from "react";
import "./Login.css"
import Social from "../component/Login/Social"
import { Link } from "react-router-dom";

// const focus = onfocus()

export default function LoginForm() {

return (   
 <>
   <section>
       <div className="login-25">
           <div className="container">
               <div className="row login-box">
                   <div className="col-lg-6 form-section">
                       <div className="form-inner">
                           <a href="login-25.html" className="logo">
                                   <img src="assets/img/logos/logo-2.png" alt="logo" />
                               </a>
                               <h3>Sign Into Your Account</h3>

                               {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                   <strong>Sorry,</strong> Something went wrong!
                                   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                               </div> */}

                               <form id="commonForm">

                                   <div className="form-group position-relative clearfix">

                                       <input name="email" type="email" className="form-control " placeholder="Email Address" aria-label="Email Address" autoComplete="off" />

                                       <div className="login-popover login-popover-abs" data-bs-toggle="popover" data-bs-trigger="hover" title="Clarification" data-bs-content="And here's some amazing content. It's very engaging. Right?">
                                           <i className="fa fa-info-circle"></i>
                                       </div>
                                   </div>

                                   <div className="form-group clearfix position-relative password-wrapper">
                                       <input name="password" type="password" className="form-control" autoComplete="off" placeholder="Password" aria-label="Password" />
                                       <i className="fa fa-eye password-indicator"></i>
                                   </div>


                                   {/* remper */}
                                   <div className="checkbox form-group clearfix">
                                       <div className="form-check float-start">
                                           <input className="form-check-input" type="checkbox" id="rememberme" />
                                           <label className="form-check-label" htmlFor="rememberme">
                                               Remember me
                                           </label>
                                       </div>
                                       <Link to="/Forgot" className="link-light float-end forgot-password">Forgot your password?</Link>
                                   </div>

                                   <div className="form-group clearfix mb-0">
                                   <Link to="/Dashboard"><button type="submit" id="login" className="btn btn-primary btn-lg btn-theme">Login</button></Link>
                                   </div>

                                   <div className="extra-login clearfix">
                                       <span>Or Login With</span>
                                   </div>
                               </form>

                               <div className="clearfix"></div>

                               <Social />

                               <p>Don't have an account?  <Link to="/Register">Register here</Link></p>

                           </div>
                    </div>
                   <div className="col-lg-6 align-self-center form-text">
                       <div className="info clearfix align-self-center">
                           <h1 className="animate-charcter">We Make Spectacular</h1>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type scrambled it to make</p>
                       </div>
                   </div>
                </div>
            </div>
       </div>
    </section>
 </>
 );
}
