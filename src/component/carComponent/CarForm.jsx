import React, { useState, useEffect } from 'react';
import { createCar, updateCar } from './api';

function CarForm({ car, refreshCars }) {
    const [formData, setFormData] = useState({
        name: '', 
        model: '', 
        color: ''
    });
    
      // Use effect to update form data whenever the selected car changes
      useEffect(() => {
        if (car) {
          setFormData({
            name: car.name || '',
            model: car.model || '',
            color: car.color || ''
          });
        } else {
          setFormData({
            name: '',
            model: '',
            color: ''
          });
        }
      }, [car]);
    
      const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (car && car.id) {
            await updateCar(car.id, formData);
        } else {
            await createCar(formData);
        }
        refreshCars();
        // Reset form data after form submission
        setFormData({
            name: '', 
            model: '', 
            color: ''
        });
    };

  return (
    <section className="page-section" id="car-form">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{car ? 'Edit Car' : 'Add Car'}</h2>
          <h3 className="section-subheading text-muted">Complete the form to {car ? 'update' : 'add'} a car.</h3>
        </div>
        <form id="carForm" onSubmit={handleSubmit}>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-12">
              <div className="form-group">
                <input className="form-control" id="name" type="text" placeholder="Car Name *" value={formData.name} onChange={handleChange} name="name" required />
                <div className="invalid-feedback">Car name is required.</div>
              </div>
              <div className="form-group">
                <input className="form-control" id="model" type="text" placeholder="Model *" value={formData.model} onChange={handleChange} name="model" required />
                <div className="invalid-feedback">Model is required.</div>
              </div>
              <div className="form-group mb-md-0">
                <input className="form-control" id="color" type="text" placeholder="Color *" value={formData.color} onChange={handleChange} name="color" required />
                <div className="invalid-feedback">Color is required.</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase" type="submit">{car && car.id ? 'Update' : 'Add'}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CarForm;
