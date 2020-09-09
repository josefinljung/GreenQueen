import React, { useState, ChangeEvent, FormEvent } from "react";

interface IGuestFormProps {
    date: string;
    time: string;
    numberOfGuests: number;
    updateFirstNameParent(fname: string): void;
    updateLastNameParent(lname: string): void;
    updateEmailParent(email: string): void;
    updatePhoneParent(p: string): void;
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
        props.updateFirstNameParent(e.target.value);
    }

    function updateLastName(e:ChangeEvent<HTMLInputElement>){
        setLastName(e.target.value);
        props.updateLastNameParent(e.target.value);
    }

    function updateEmail(e:ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
        props.updateEmailParent(e.target.value);
    }
    function updatePhone(e:ChangeEvent<HTMLInputElement>){
        setPhone(e.target.value);
        props.updatePhoneParent(e.target.value);
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
        <div className="guest-container">
                <form onSubmit={props.placeBooking}>
                    <input type="string" placeholder="First Name" id="guest-input" value={firstName} onChange={updateFirstName} required></input>
                    <input type="string" placeholder="Last Name" id="guest-input" value={lastName} onChange={updateLastName} required></input>
                    <input type="string" placeholder="Email" id="guest-input" value={email} onChange={updateEmail} required></input>
                    <input type="string" placeholder="Phone" id="guest-input" value={phone} onChange={updatePhone} required></input>
                    <div>
                    <span>By checking this box you agree to our terms and conditions and privacy policy.</span>
                    <input name="gdpr" id="gdpr" type="checkbox" onChange={updateGdpr} required></input>
                    <button type="button" onClick={props.placeBooking} disabled={!props.placeBooking}>Book</button>
                    </div>
            </form>
        </div>
    </React.Fragment>

)

}
