import React from "react";
import {FcGoogle} from "react-icons/fc";

export default function Social(props) {
    return (
        <>
            <section>
                <div className="social-list clearfix">
                    {/* <div className="icon facebook">
                        <div className="tooltip">Facebook</div>
                        <span><BiLogoFacebookSquare className="social-icon"/></span>
                    </div> */}
                   
                    <div className="icon social-icon">
                        <div className="tooltip ">Google</div>
                        <span><FcGoogle/></span>
                    </div>
                    
                    {/* <div className="icon github mr-0">
                        <div className="tooltip">Linkedin</div>
                        <span><i className="fa fa-linkedin"></i></span>
                    </div> */}
                </div>
                
            </section>
        </>
    );
}
