import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import GuestData from "../guest/guestData";

interface IGuestFormProps {
    date: string;
    time: string;
    numberOfGuests: number;
    placeBooking: (e: FormEvent) => void;
    
}


export default function GuestForm (props: IGuestFormProps){

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

    return (

    <React.Fragment>
    <form onSubmit={props.placeBooking}>
                <input type="string" placeholder="First Name" value={firstName} onChange={updateFirstName} required></input>
                <input type="string" placeholder="Last Name" value={lastName} onChange={updateLastName} required></input>
                <input type="string" placeholder="Email" value={email} onChange={updateEmail} required></input>
                <input type="string" placeholder="Phone" value={phone} onChange={updatePhone} required></input>
                <div>

                <label>By checking this box you agree to our terms and conditions and privacy policy.</label>

                <input name="gdpr" id="gdpr" type="checkbox" onChange={updateGdpr} required></input>
                <button type="button" onClick={props.placeBooking} disabled={!props.placeBooking}>Book</button>
                </div>
    </form>
    </React.Fragment>

)

}
