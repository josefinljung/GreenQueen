import React from "react";
import {
    BrowserRouter as Router, Link, Route, Switch
  } from "react-router-dom";
import App from "../../App";

export default function Error(){
    return(  
        <Route>
            <p>Oh no! The page you were looking for doesn't seem to exist.
                Perhaps you wanted to make a     
                <Link to="/">resevation</Link>
                ?
            </p>  
          </Route>
    )
}