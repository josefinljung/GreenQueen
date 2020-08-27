import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";

export default function BookingSystem(){

    const [countTable, setCountTable] = useState(0);
    const [searchData, setSearchData] = useState(0);
    const [bookingDate, setBookingDate] = useState(0);
    const [bookingTime, setBookingTime] = useState(0);


    useEffect(() => {

        axios.get("http://localhost:8000/search").then(searchData=>{
            console.log(searchData.data);
            
        });

        function updateTable(){
     

            //setState with searchData.data.tablenumber
            setCountTable(  {countTable : searchData.data.table })
        

        }

        function searchForTable (e: ChangeEvent<HTMLInputElement>) {

            setBookingDate(parseInt(e.target.value));

        }

        // state = searchData.data.table
        // state < 15 ?   fullbokat </div>  : <form>  booking formulret </form>

    }, []);

    // bind function with onchange event with typescript 
    return (
        <div>
            <input type="date" value={bookingDate} onChange={updateTable}/>
            <input type="time" value={bookingTime} onChange={updateTable} />
            <button type="button" onClick={searchForTable}>Search</button>

        </div>
    )

}