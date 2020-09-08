import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



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
                return(<tr className="trTheBookings" key={theBooking._id}>
                        <td className="admintdBooking">{theBooking.GuestId}</td>
                        <td className="admintdDate">{theBooking.Date.split('T')[0]}</td>
                        <td className="admintdTime">{theBooking.Time} </td>
                        <td className="admintdGuests">{theBooking.NumberOfGuests} </td>
                        <td className="admintdEditOrDelete">
                            <span className="adminEditIcon"><FontAwesomeIcon icon ={faEdit} /></span>
                            <span className="adminDeleteIcon"><FontAwesomeIcon icon={faTrashAlt}  /></span>
                        </td>                    
                    </tr>)
            })
        );
    })
    },[])

    return (
        <div className="adminContainer">
            <h2>All Bookings</h2>
            <table className="adminBookingTable">
                <tr>
                    <th className="adminthBooking">Booking Id</th>
                    <th className="adminthDate">Date</th>
                    <th className="adminthTime">Time</th>
                    <th className="adminthGuests">Guests</th>
                    <th className="adminthEditOrDelete"></th>
                </tr>
                {theBookings} 
            </table>
        </div>
    )
}