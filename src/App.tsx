import React from 'react';
import BookingSystem from './component/bookingsystem/bookingSystem';
import '../src/App.scss';
import desktopImage from './assets/background-image.jpg';
import mobileImage from './assets/mobile-background.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/about/about';
import Admin from './component/admin/admin';
import Error from './component/error/error';
import BookingConfirmation from './component/bookingConfirmation/bookingconfirmation';
import Menu from './component/menu/menu';

 function App() {

  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
              <BookingSystem />
          </Route>
          <Route path="/bookingconfirmation">
            <BookingConfirmation />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
