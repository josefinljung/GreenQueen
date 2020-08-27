import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import BookingData from "../booking/bookingData";

export default function BookingSystem(){

    const [countTable, setCountTable] = useState(0);
    const [searchData, setSearchData] = useState(0);
    const [bookingDate, setBookingDate] = useState(0);
    const [bookingTime, setBookingTime] = useState(0);

    function updateDate(e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        //setState with searchData.data.tablenumber
        setBookingDate(parseInt(e.target.value));
    

    }
    function updateTime(e: ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
        //setState with searchData.data.tablenumber
        setBookingTime(parseInt(e.target.value));

    }

    function searchForTable () {
        axios.get("http://localhost:8000/search?time=" + bookingTime + "&date=" + bookingDate).then(searchData=>{
            console.log(searchData.data);
            
        });
        //setBookingDate();

    }

    // bind function with onchange event with typescript 
    return (
        <div>
            <input type="date" value={bookingDate} onChange={updateDate}/>
            <input type="time" value={bookingTime} onChange={updateTime} />
            <button type="button" onClick={searchForTable}>Search</button>

        </div>
    )

}