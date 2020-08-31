//här ska vi väl använda modellen från guest??? göra den till ett interface så vi kan använda den här
import React, { ChangeEvent, FormEvent, useReducer } from "react";
import axios from "axios";
export interface GuestForm {
    FirstName: String,
    LastName: String,
    Email: String,
    Phone: Number

}


    function guestForm(){
/* // state object lagrar vårt form sen uppdateras det med newstate :)
    let defaultValue: GuestForm = { FirstName: '', LastName: '', Email: '', Phone:0 };

        const [guestFormValues, setGuestFormValues] = useReducer(
            (state: GuestForm, newState:GuestForm)=> ({...state,...newState}),
            defaultValue
        );

        //update(e: ChangeEvent<any>) {
            const {name, value} = e.target;

            setGuestFormValues({[name:]value});
        }

        return (
            <form onSubmit={placeBooking}>
            <input type="string" placeholder="First Name" value={firstName} name="firstName" onChange={update}></input>
            <input type="string" placeholder="Last Name" value={lastName} name="lastName"onChange={update}></input>
            <input type="string" placeholder="Email" value={email}name="email" onChange={update}></input>
            <input type="string" placeholder="000-0000000" value={phone}name="phone" onChange={update}></input>
            <div>

            <label>By checking this box you agree to our terms and conditions and privacy policy.</label>

                <input name="gdpr" id="gdpr" type="checkbox" checked={this.state.setGdpr}></input>
                <button type="button" onClick={placeBooking}>Book</button>
            </div>
        </form>
            
        ); */
    }