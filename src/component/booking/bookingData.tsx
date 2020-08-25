import React, {useEffect} from "react";
import axios from "axios";


    export default function BookingData(){

        useEffect(() => {
        axios.get("http://localhost:8000/dummybookings").then(theData=>{
        console.log(theData.data);
        });

        },[] );

        return (
            <div>
                hello
            </div>
        )
    }