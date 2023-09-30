import React from "react";
import "../../assets/css/card.css"
export default function card(pros) {
    return (
        <>
            <div className="main-card">
            <div>{pros.main}</div>
            </div>
        </>
    );
}