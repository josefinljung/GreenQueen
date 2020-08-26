import React, { useState, useEffect } from "react";
import axios from "axios";
import GuestData from "../guest/guestData";
import BookingData from "../booking/bookingData";


export default function Admin(){

    
    const [theBookings, setTheBookings] = useState([]);
       

    useEffect(() => {
    axios.get("http://localhost:8000/bookings").then(theData=>{
        // const data = theData.data;
        // setTheBookings(theBookings);
        console.log(theData.data);
    })
    .catch(()=>{
        console.log("YEY DATA ! ")
    });

    },[])


    return (
        <div>
            Hello Admin
            <h2>All Bookings</h2>
            <ul>            
            </ul>
            <GuestData></GuestData>
            

        </div>
    )
}