import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";


interface IGuestDataProps{
    date: string;
    time: string;
    numberOfGuests: number;
}
export default function GuestData (props:IGuestDataProps) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gdpr, setGdpr] = useState(false);

    
    function updateFirstName(e:ChangeEvent<HTMLInputElement>){
        setFirstName(e.target.value);
    }

    function updateLastName(e:ChangeEvent<HTMLInputElement>){
        setLastName(e.target.value);
    }

    function updateEmail(e:ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
    }
    function updatePhone(e:ChangeEvent<HTMLInputElement>){
        setPhone(e.target.value);
    }

    function updateGdpr(e:ChangeEvent<HTMLInputElement>){
        if(e.target.checked === true){
        console.log(e.target.value)
            return setGdpr (true)
        } else {
            return setGdpr (false)
        }        
    }

    function placeBooking (e:FormEvent) {
        e.preventDefault(); 
        
        let dataToSend = {
            fname: firstName,
            lname: lastName,
            email: email,
            p: phone,
            GDPR: gdpr,
            date: props.date,
            time: props.time,
            numberOfGuests: props.numberOfGuests
        }

        axios.post("http://localhost:8000/createbooking", dataToSend).then(theData=>{


        console.log(theData.data);
        
        });


        }

        return (
            <Route>
            <form onSubmit={placeBooking}>
                <input type="string" placeholder="First Name" value={firstName} onChange={updateFirstName}></input>
                <input type="string" placeholder="Last Name" value={lastName} onChange={updateLastName}></input>
                <input type="string" placeholder="Email" value={email} onChange={updateEmail} ></input>
                <input type="string" placeholder="Phone" value={phone} onChange={updatePhone} ></input>
                <div>

                <label>By checking this box you agree to our terms and conditions and privacy policy.</label>

                <input name="gdpr" id="gdpr" type="checkbox" onChange={updateGdpr} ></input>
                <Link to="/bookingconfirmation"><button type="button" onClick={placeBooking} disabled={!placeBooking}>Book</button></Link>
                </div>
            </form>
            </Route>
        )
};
    