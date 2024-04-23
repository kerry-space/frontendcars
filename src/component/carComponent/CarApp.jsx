import React, { useState, useEffect } from 'react';
import CarList from './CarList';
import CarForm from './CarForm';
import { getCars } from './api';
import carCollectionImage from '../../images/futuristic-car-collection.webp'; // Make sure to adjust the path as necessary.

function CarApp() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const fetchedCars = await getCars();
    if (fetchedCars.length !== 0) {
      setCars(fetchedCars);
    } else {
      setError("Failed to fetch cars. Please try again later.");
    }
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const refreshCars = () => {
    fetchCars();
    setSelectedCar(null); // Reset selection after adding/updating
  };

  if (error) {
    return <div className="alert alert-danger" role="alert">{error}</div>;
  }

  
  return (
    <div className=" mt-5 pt-5">
      <div className=" text-center mb-5 hero">
        <img src={carCollectionImage} className="img-fluid rounded" alt="Futuristic Car Collection" />
      </div>
      <CarList cars={cars} onDelete={refreshCars} onSelectCar={handleSelectCar} refreshCars={refreshCars} />
      <CarForm car={selectedCar} refreshCars={refreshCars} />
    </div>
  );
}

export default CarApp;
