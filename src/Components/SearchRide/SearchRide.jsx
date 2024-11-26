import React from 'react';
import Carpool from "../../assets/carpool-illustration.jpg";
import "./searchRide.css";

const SearchRide = ({ location, setLocation, destination, setDestination, date, setDate, onSearch }) => {
  const cities = [
    'Tunis', 'Sfax', 'Sousse', 'Gabès', 'Bizerte', 'Ariana', 'Kairouan', 'Gafsa', 'Ben Arous',
    'Monastir', 'Medenine', 'Nabeul', 'Tataouine', 'Kasserine', 'Kebili', 'Mahdia', 'Jendouba',
    'Manouba', 'Tozeur', 'Siliana', 'Beja', 'Zaghouan'
  ];

  return (
    <div className='search-ride-container'>
      <div className='input-section'>
        <h1>Request a ride for now or later</h1>
        <p>Add your trip details, hop in, and go.</p>
        <div className='inputs'>
          <label>
            Location:
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="" disabled>Select Location</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </label>

          <label>
            Destination:
            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="" disabled>Select Destination</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </label>

          <label>
            Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </label>
          <button onClick={onSearch}>Search</button>
        </div>
      </div>

      <img className='cover-image' src={Carpool} alt="" />
    </div>
  );
};

export default SearchRide;
