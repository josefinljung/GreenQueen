import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import BookingConfirmation from "../bookingConfirmation/bookingconfirmation";
import GuestForm from "../guestForm/guestForm";

interface IGuestDataProps {

    date: string;
    time: string;
    numberOfGuests: number;
    
}


export default function GuestData (props: IGuestDataProps) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);


        
        function placeBooking (e:FormEvent) {
            e.preventDefault(); 
            
            let dataToSend = {
                fname: firstName,
                lname: lastName,
                email: email,
                p: phone,
                // GDPR: gdpr,
                date: props.date,
                time: props.time,
                numberOfGuests: props.numberOfGuests
            }
    
    
            axios.post("http://localhost:8000/createbooking", dataToSend).then(theData=>{
                
            setShowBookingConfirmation(true);
            // redirect till conf
    
    
            console.log(theData.data);
            
        });
    }

        return (

            <React.Fragment> 
            {showBookingConfirmation ?
            <BookingConfirmation></BookingConfirmation>
            : <GuestForm date={props.date} time={props.time} numberOfGuests={props.numberOfGuests} placeBooking={placeBooking}></GuestForm>
            } 
            </React.Fragment>
        )
            
    }
    