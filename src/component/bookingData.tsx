import React, {Component} from "react";
import axios from "axios";



class Booking extends Component{


//använd array
// mappa listan och skapa list av bookinglist ....
  
    async getData(){

       const response=  axios.get("http://localhost:8000/dummybookings")
       console.log(response)
    }

render(){

    return(
        <div>
            hello
        </div>
    )
}
}


export default Booking;
