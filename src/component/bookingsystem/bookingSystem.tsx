import React, { useEffect } from "react";
import axios from "axios";

export default function BookingSystem(){

    useEffect(() => {

        axios.get("http://localhost:8000/search").then(searchData=>{
            console.log(searchData.data);
        });

    }, []);

    return (
        <div>
            IT WORKS
        </div>
    )

}