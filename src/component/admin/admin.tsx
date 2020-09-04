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
                return(<tr key={theBooking._id}>
                    <td>{theBooking.GuestId}</td>
                    <td>{theBooking.Date.split('T')[0]}</td>
                    <td>{theBooking.Time} </td>
                    </tr>)
            })
        );
    })
    },[])

    return (
        <div>
            Hello Admin
            <h2>All Bookings</h2>
            <div className="container">
                <table className="adminHeader">
                    <tr>
                        <th>Booking Id:</th>
                        <th>Date:</th>
                        <th>Time:</th>
                    </tr>
                </table>
            <table> 
                    {theBookings} 
            </table>
            </div>
        </div>
    )
}