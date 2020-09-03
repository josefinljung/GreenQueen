import React, { useState, useEffect } from "react";
import axios from "axios";
import GuestData from "../guest/guestData";
import BookingData from "../booking/bookingData";


export default function Admin(){

    
    const [theBookings, setTheBookings] = useState([]);
      
    function allBookings(res: any){
        setTheBookings(res)
    }

    useEffect(() => {
    axios.get("http://localhost:8000/bookings").then(theData=>{
        console.log(theData);
        allBookings(theData.data)
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
            

        </div>
    )
}