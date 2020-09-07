import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import GuestData from "../guest/guestData";
import FullyBookedData from "../fullyBookedData/fullyBookedData";


export default function BookingSystem(){

    const [searchData, setSearchData] = useState([]);
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [avaiableTables,setAvaiableTables] = useState(0);
    const [showIfBooked,setShowIfBooked] = useState(false);


        function updateDate(e: ChangeEvent<HTMLInputElement>){
            setBookingDate(e.target.value);
        }

        function updateTime(e: ChangeEvent<HTMLSelectElement>){
            setBookingTime(e.target.value);        
        }

        function updateAmount(e: ChangeEvent<HTMLSelectElement>){
            setNumberOfGuests(parseInt(e.target.value));            
        }
        
        function searchResult(r: any){
            setSearchData(r) // listan med bokningar
            
        }

        function searchForTable () {
            axios.get("http://localhost:8000/search?time=" + bookingTime + "&date=" + bookingDate).then(resData=>{
            console.log(resData.data);            

            searchResult(resData.data);
            setAvaiableTables(resData.data.length)
           
        });
        setShowIfBooked(true)
     }

     return (
        <React.Fragment>
            <div>
                <select onChange={updateTime} required>
                <option value="0">Time</option> 
                    <option value="18:00">18:00</option> 
                    <option value="21:00">21:00</option>
                </select>
                <input type="date" value={bookingDate} onChange={updateDate} required/>
                <select onChange={updateAmount}>
                    <option value="0">Guests</option> 
                    <option value="1">1</option> 
                    <option value="2">2</option>
                    <option value="3">3</option> 
                    <option value="4">4</option> 
                    <option value="5">5</option> 
                    <option value="6">6</option> 
                </select>
                <button type="button" onClick={searchForTable} >Search</button>
            </div>

         { showIfBooked?  
             ( avaiableTables <=14) ? 
         <GuestData date={bookingDate} time={bookingTime} numberOfGuests={numberOfGuests}></GuestData>
             : <FullyBookedData></FullyBookedData>
             : <> </> }
         </React.Fragment>
            
     )
}