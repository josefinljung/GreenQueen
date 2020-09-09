import React, { useState } from "react";

export default function BookingConfirmation(){

    const [theBookings, setTheBookings] = useState([]);
      
    function allBookings(res: any){
        setTheBookings(res)
    }

    return(
    <div className="confirmation-container">
        <p>Thank you for booking a table at Green Queen! Check your email for your booking confirmation. Have a green day! {theBookings}</p>
    </div>
    )
}