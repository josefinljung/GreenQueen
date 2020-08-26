import React, { useEffect } from "react";
import axios from "axios";

export default function GuestData () {
    useEffect(() => {
        axios.get("/dummybookings").then(theData=>{
        console.log(theData.data);
        });

        },[] );

        return (
            <div>
                hello guest
            </div>
        )
    }