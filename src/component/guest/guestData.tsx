import React, { useEffect, useState, ChangeEvent, FormEvent, useReducer } from "react";
import axios from "axios";

export default function GuestData () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [gdpr, setGdpr] = useState('');

    
    function updateFirstName(e:ChangeEvent<HTMLInputElement>){           
        console.log(e.target.value)
        setFirstName(e.target.value);
    }

    function updateLastName(e:ChangeEvent<HTMLInputElement>){           
        console.log(e.target.value)
        setLastName(e.target.value);
    }

    function updateEmail(e:ChangeEvent<HTMLInputElement>){           
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    function updatePhone(e:ChangeEvent<HTMLInputElement>){           
        console.log(e.target.value)
        setPhone(parseInt(e.target.value));
    }

    function updateGdpr(e:ChangeEvent<HTMLSelectElement>){
        console.log(e.target.value)
        setGdpr(e.target.value);
    }


         
    useEffect(() => {
        axios.get("/dummybookings").then(theData=>{
        console.log(theData.data);
        });

        },[] 
    );



    function placeBooking (e:FormEvent) {
        //  axios.post(http://localhost:8000/bookings)
        e.preventDefault();

        console.log(firstName)


        }

        return (
            <form onSubmit={placeBooking}>
                <input type="string" placeholder="First Name" value={firstName} onChange={updateFirstName}></input>
                <input type="string" placeholder="Last Name" value={lastName} onChange={updateLastName}></input>
                <input type="string" placeholder="Email" value={email} onChange={updateEmail}></input>
                <input type="string" placeholder="000-0000000" value={phone} onChange={updatePhone}></input>
                <div>

                <label>By checking this box you agree to our terms and conditions and privacy policy.</label>

                    {/* <input name="gdpr" id="gdpr" type="checkbox" checked={this.state.setGdpr}></input> */}



                    <button type="button" onClick={placeBooking}>Book</button>
                </div>
            </form>
        )

           
            
};
    