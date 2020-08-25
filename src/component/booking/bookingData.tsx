import React, {useEffect} from "react";
import axios from "axios";


    export default function getDataComponent(){

        useEffect(() => {
        axios.get("http://localhost:8000/dummybookings").then(theData=>{
        theData.data
        });

        },[] );

        return (
            <div>
                hello
            </div>
        )
    }