import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Admin(){

    
    const [theBookings, setTheBookings] = useState([]);
      
    function allBookings(res: any){
        setTheBookings(res)
    }

    useEffect(() => {
    axios.get("http://localhost:8000/bookings").then(theData=>{
        console.log(theData.data);
        allBookings(// key för att se vilket objekt som ändrats
            theData.data.map((theBooking:any)=>{
                return(<ul key={theBooking._id}>
                    Booking Id: {theBooking.GuestId}:
                    <li>Booking Time: {theBooking.Time}, Booking Date: {theBooking.Date.split('T')[0]}</li>
                </ul>)
            })
        );
    })
    },[])

    return (
        <div>
            Hello Admin
            <h2>All Bookings</h2>
            <ul> 
                {theBookings}      
            </ul>
            

        </div>
    )
}