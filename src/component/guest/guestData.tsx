import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
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

        function updateFirstNameParent (fname: string){
            setFirstName(fname);
        }

        function updateLastNameParent (lname: string){
            setLastName(lname);
        }

        function updateEmailParent (email: string){
            setEmail(email);
        }

        function updatePhoneParent (phone: string){
            setPhone(phone);
        }


        return (

            <React.Fragment> 

            {showBookingConfirmation ?
            <BookingConfirmation></BookingConfirmation>
            : <GuestForm date={props.date} time={props.time} numberOfGuests={props.numberOfGuests} placeBooking={placeBooking} 
            updateFirstNameParent={updateFirstNameParent} updateLastNameParent={updateLastNameParent} 
            updateEmailParent={updateEmailParent} updatePhoneParent={updatePhoneParent}></GuestForm>
            } 
            </React.Fragment>
        )   
    }
    