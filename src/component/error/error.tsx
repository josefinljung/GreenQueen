import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";


export default function Error(){
    return(  
        
            <div className="errorContainer">
                <p className="errorText">
                Oh no! The page you were looking for doesn't seem to exist.
                Perhaps you wanted to make a <Link to="/">reservation</Link>?
                </p>  
            </div>
    )
}