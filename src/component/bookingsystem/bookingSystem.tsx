import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import GuestData from "../guest/guestData";
import FullyBookedData from "../fullyBookedData/fullyBookedData";
import BounceImage from '../../assets/bounce-image.png';

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

        function searchForTable () {            
            axios.get("http://localhost:8000/search?time=" + bookingTime + "&date=" + bookingDate).then(resData=>{
            console.log(resData.data);
            setAvaiableTables(resData.data.length)           
        });

        setShowIfBooked(true)        
     }

     
     return (
        <React.Fragment>
            <img src={BounceImage} id="startpage"/>
            <h1 className="logo">GREEN QUEEN</h1>
            <div className="booking-container">
                <select onChange={updateTime} className="booking-options">
                    <option value="0">Time</option> 
                    <option value="18:00">18:00</option> 
                    <option value="21:00">21:00</option>
                </select>
                <select onChange={updateAmount} className="booking-options">
                    <option value="0">Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <input type="date" value={bookingDate} onChange={updateDate} id="booking-date"/>
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