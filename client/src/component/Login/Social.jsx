import React from "react";

// import "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap"

export default function Social(props) {
    return (
        <>
            <section>
                <div className="social-list clearfix">
                    <div className="icon facebook">
                        <div className="tooltip">Facebook</div>
                        <span><i className="fa fa-facebook"></i></span>
                    </div>
                    <div className="icon twitter">
                        <div className="tooltip">Twitter</div>
                        <span><i className="fa fa-twitter"></i></span>
                    </div>
                    <div className="icon instagram">
                        <div className="tooltip">Google</div>
                        <span><i className="fa fa-google"></i></span>
                    </div>
                    <div className="icon github mr-0">
                        <div className="tooltip">Linkedin</div>
                        <span><i className="fa fa-linkedin"></i></span>
                    </div>
                </div>
                
            </section>
        </>
    );
}
