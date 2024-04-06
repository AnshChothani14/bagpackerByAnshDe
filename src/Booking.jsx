import React, { useState } from 'react';
import flight from "./places/flight.svg";
import hotel from './places/hotel.svg';
import bus from './places/bus-transportation-svgrepo-com.svg';
import train from './places/train-front-svgrepo-com.svg';
import FlightDetl from './bookingComponents/FlightDetl';
import HotelDetl from './bookingComponents/HotelDetl';
import BusDetl from './bookingComponents/BusDetl';
import TrainDetl from './bookingComponents/TrainDetl';

const Booking = () => {
  const [selectedBooking, setSelectedBooking] = useState('flight');

  const handleBookingSelect = (bookingType) => {
    setSelectedBooking(bookingType);
  };

  return (
    <div>
      <div className="container booking">
        <h2 className='my-3'>Booking System</h2>
        <div className="main d-flex">
          <div className="ss">
            <div className="flight" onClick={() => handleBookingSelect('flight')}>
              <img src={flight} className='bookingSvg' alt="" />
              <p className='title'>Flights</p>
            </div>
            <div className="flight" onClick={() => handleBookingSelect('hotel')}>
              <img src={hotel} className='bookingSvg' alt="" />
              <p className='title'>Hotel</p>
            </div>
            <div className="flight" onClick={() => handleBookingSelect('bus')}>
              <img src={bus} className='bookingSvg' alt="" />
              <p className='title'>Bus</p>
            </div>
            <div className="flight" onClick={() => handleBookingSelect('train')}>
              <img src={train} className='bookingSvg' alt="" />
              <p className='title'>Train</p>
            </div>
          </div>
          <div className="hs">
            {selectedBooking === 'flight' && <FlightDetl />}
            {selectedBooking === 'hotel' && <HotelDetl />}
            {selectedBooking === 'bus' && <BusDetl />}
            {selectedBooking === 'train' && <TrainDetl />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
