import React from "react";
import "./Login.css"
import Social from "../component/Login/Social"
// import fooderimage from "./images/img-6.png";
import { Link } from "react-router-dom";
// import "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap"

export default function ForgotPassword() {
    return (
        <>
            <section>
                {/* <!-- Login 6 start --> */}
                <div className="login-25">
                    <div className="container">
                        <div className="row login-box">
                            <div className="col-lg-6 form-section">
                                <div className="form-inner">
                                    <a href="login-25.html" className="logo">
                                        <img src="assets/img/logos/logo-2.png" alt="logo" />
                                    </a>
                                    <h3>Recover Your Password</h3>
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Congrats,</strong> and email has been sent to your email.
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <form action="#" method="POST" id="commonForm">

                                        <div className="form-group position-relative clearfix">
                                            <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                            <div className="login-popover login-popover-abs" data-bs-toggle="popover" data-bs-trigger="hover" title="Clarification" data-bs-content="And here's some amazing content. It's very engaging. Right?">
                                                <i className="fa fa-info-circle"></i>
                                            </div>
                                        </div>
                                       
                                        <div className="form-group clearfix mb-0">
                                            <button type="submit" className="btn btn-primary btn-lg btn-theme">Send Me Email</button>
                                        </div>
                                        <div className="extra-login clearfix">
                                            <span>Or Login With</span>
                                        </div>
                                    </form>
                                    <div className="clearfix"></div>
                                    <Social/>
                                    <p>Already a member?   <Link to="/">Login here</Link></p>
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
                {/* <!-- Login 6 end --> */}
            </section>
        </>
    );
}
