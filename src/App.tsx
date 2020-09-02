import React from 'react';
import Booking from "./component/booking/bookingData"
import Guest from "./component/guest/guestData"
import BookingData from './component/booking/bookingData';
import BookingSystem from './component/bookingsystem/bookingSystem';
import GuestData from './component/guest/guestData';
import '../src/App.scss';

import desktopImage from './assets/background.jpg';
import mobileImage from './assets/mobile-background.jpg';


function App() {


  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;


  return (

    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">

  <BookingSystem></BookingSystem>

    <h1 id="header">GREEN QUEEN</h1>
    
      </div>
    </div>
    
  );
}

export default App;
