
import React from "react";
import '../../assets/css/loader.css'; // Import your loader CSS

export default function Loader(props) {

    return( 
        <>
          { props.loderstatus && 
        <div className="rotating-dots-container">
            <div className="rotating-dots">
                <div></div>
                <div></div>
            </div>
        </div>
    }</>
    )
      
}
