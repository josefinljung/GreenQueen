import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import BookingData from "../booking/bookingData";
import { render } from "@testing-library/react";
import GuestData from "../guest/guestData";
 
export default function BookingSystem(){

    const [searchData, setSearchData] = useState([]);
    const [bookingDate, setBookingDate] = useState(0);
    const [bookingTime, setBookingTime] = useState('');
    const [amountOfGuest, setAmountOfGuest] = useState(0);
    const [avaiableTables,setAvaiableTables] = useState(true);
    const [showGuestForm,setShowGuestForm] = useState(false);

 
        function updateDate(e: ChangeEvent<HTMLInputElement>){           
            console.log(e.target.value)            
            setBookingDate(parseInt(e.target.value));
        }

        function updateTime(e: ChangeEvent<HTMLSelectElement>){           
            console.log(e.target.value)            
            setBookingTime(e.target.value);        
        }

        function updateAmount(e: ChangeEvent<HTMLSelectElement>){
            console.log(e.target.value)            
            setAmountOfGuest(parseInt(e.target.value));            
        }
        
        function searchResult(r: any){
            setSearchData(r) // listan med bokningar
        }

        function searchForTable () {
            axios.get("http://localhost:8000/search?time=" + bookingTime + "&date=" + bookingDate).then(resData=>{
            console.log(resData.data);            

            searchResult(resData.data);

            if (searchData.length < 15 ){ // filtrera om längden på datum & tid är mer än 15 rader? 
               //lagra state för rendera två olka divar
               setShowGuestForm(true) 
               
            }
        });
     }

     return (
        <React.Fragment>
            <div>
                <select onChange={updateTime}>
                <option value="0">Time</option> 
                    <option value="18:00">18:00</option> 
                    <option value="21:00">21:00</option>
                </select>
                <input type="date" value={bookingDate} onChange={updateDate} />
                <select onChange={updateAmount}>
                    <option value="0">Guests</option> 
                    <option value="1">1</option> 
                    <option value="2">2</option>
                    <option value="3">3</option> 
                    <option value="4">4</option> 
                    <option value="5">5</option> 
                    <option value="6">6</option> 
                </select>
                <button type="button" onClick={searchForTable}>Search</button>
            </div>

             {showGuestForm ? 
             <GuestData></GuestData>
             : null
            }
         </React.Fragment>
            
     )
}