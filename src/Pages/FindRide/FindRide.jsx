import React, { useState } from 'react';
import SearchRide from '../../Components/SearchRide/SearchRide';
import OptionCard from '../../Components/optionCard/OptionCard';
import './findRide.css';

const FindRide = () => {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [filteredOffers, setFilteredOffers] = useState([]);
  
  // Sample data for default offers
  const defaultOffers = [
    { location: 'Tunis', destination: 'Sousse', date: '2023-12-21', driverName: 'Driver A' },
    { location: 'Sfax', destination: 'Tunis', date: '2023-12-22', driverName: 'Driver B' },
    { location: 'Gabès', destination: 'Sfax', date: '2023-12-23', driverName: 'Driver C' },
    { location: 'Monastir', destination: 'Kairouan', date: '2023-12-24', driverName: 'Driver D' }
  ];

  // Function to handle search
  const handleSearch = () => {
    const results = defaultOffers.filter(offer =>
      (!location || offer.location === location) &&
      (!destination || offer.destination === destination) &&
      (!date || offer.date === date)
    );
    setFilteredOffers(results);
  };

  return (
    <>
      <div className='getRide-container'>
        <div className='search-ride'>
          <SearchRide 
            location={location} 
            setLocation={setLocation} 
            destination={destination} 
            setDestination={setDestination} 
            date={date} 
            setDate={setDate} 
            onSearch={handleSearch} 
          />
        </div>
        <h1 className='section-title'>Offers</h1>
        <div className='ride-offers'>
          {(filteredOffers.length > 0 ? filteredOffers : defaultOffers).map((offer, index) => (
            <OptionCard 
              key={index} 
              location={offer.location} 
              destination={offer.destination} 
              date={offer.date} 
              driverName={offer.driverName} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindRide;
