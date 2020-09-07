import React, {useEffect, useState} from "react";
import axios from "axios";


    interface IBookingsProps {
        theBookingData(bookings: []):void;
    }

    export default function BookingData(props: IBookingsProps){
    
        const [theBookings, setTheBookings] = useState([]);
           
    
        useEffect(() => {
        axios.get("").then(theData=>{

            console.log(theData.data);
        })
        .catch(()=>{
            console.log("YEY DATA ! ")
        });

        },[])

        // function sendTheBooking(){
        //     props.theBookingData(theBookings);
        // }

        return (
            <div></div>
        )
    }

    

