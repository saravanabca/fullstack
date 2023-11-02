import React from "react";
// import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
export default function Social(props) {

    const handleLogout = async () => { //goggle logout function
        try {
          googleLogout();
          console.log('User logged out successfully');
          // Additional actions after logout (redirect, state update, etc.)
        } catch (error) {
          console.error('Logout failed', error);
          // Handle errors or failed logout attempts
        }
    };

    return (
        <>
            <section>
                <div className="social-list clearfix">
                    {/* <div className="icon facebook">
                        <div className="tooltip">Facebook</div>
                        <span><BiLogoFacebookSquare className="social-icon"/></span>
                    </div> */}

                    {/* 
                    <div className="icon social-icon">
                        <div className="tooltip ">Google</div>
                        <span><FcGoogle /></span>
                    </div> */}

                    <GoogleOAuthProvider clientId="763367282113-anueg3utovvd0cc68p4ra85atoerpqdl.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                    
                                const decoded = jwtDecode(credentialResponse.credential);

                                console.log(decoded);

                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                        
                    </GoogleOAuthProvider>

                    <button onClick={handleLogout}>logout</button> 

                    {/* <div className="icon github mr-0">
                        <div className="tooltip">Linkedin</div>
                        <span><i className="fa fa-linkedin"></i></span>
                    </div> */}
                </div>
            </section>
        </>
    );
}
