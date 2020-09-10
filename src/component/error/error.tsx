import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import BounceImage from '../../assets/bounce-image.png';

export default function Error(){
    
    return(          

        <React.Fragment>
            <img src={BounceImage} id="startpage"/>  
            <div className="errorContainer">
                <h1 className="error-header">404 NOT FOUND</h1>
                <p className="errorText">
                Oh no! The page you were looking for doesn't seem to exist.
                Perhaps you wanted to make a <Link to="/">reservation</Link>?
                </p>
            </div>
        </React.Fragment>
    )
}