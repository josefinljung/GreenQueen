import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Error(){
    return(  
        <Router>
            <p>Oh no! The page you were looking for doesn't seem to exist.
                Perhaps you wanted to make a 
            

            <Link to="/">
                React
            </Link>
            ?
            </p>
        </Router>
    )
}