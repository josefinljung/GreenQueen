import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GuestData () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);

    
  

    useEffect(() => {
        axios.get("/dummybookings").then(theData=>{
        console.log(theData.data);
        });

        },[] );

        return (
            <div>
                <input type="string" value={firstName}></input>

            </div>
        )
    }