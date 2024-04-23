import React, { useState, useEffect } from 'react';
import { updateCar, deleteCar } from './api';
import "./car.css"

function CarList({ cars, onDelete, refreshCars }) {
  // Initialize and manage edit states
  const [editStates, setEditStates] = useState({});

  // Update editStates whenever cars array changes
  useEffect(() => {
    const newEditStates = cars.reduce((acc, car) => {
      acc[car.ID] = { editing: false, name: car.Name, model: car.Model, color: car.Color };
      return acc;
    }, {});
    setEditStates(newEditStates);
  }, [cars]);

  const handleEditChange = (id, field, value) => {
    setEditStates(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleToggleEdit = (id) => {
    setEditStates(prev => ({
      ...prev,
      [id]: { ...prev[id], editing: !prev[id].editing }
    }));
  };

  const handleSave = async (id) => {
    const car = editStates[id];
    try {
      await updateCar(id, { name: car.name, model: car.model, color: car.color });
      refreshCars(); // Refresh the cars list after a successful update
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleDelete = async (id) => {
    await deleteCar(id);
    onDelete();
  };


  
  return (
    <section className="container page-section car-list-container" id="car-list">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Cars List</h2>
          <h3 className="section-subheading text-muted">Browse and manage the list of cars.</h3>
        </div>
        <div className="row text-dark">
          {cars.map(car => (
            <div key={car.ID} className="col-md-4 mb-4 ">
              <div className="card d-flex justify-content-center align-items-center">
                <div className="card-body ">
                  {editStates[car.ID]?.editing ? (
                    <>
                      <input
                        value={editStates[car.ID].name}
                        onChange={(e) => handleEditChange(car.ID, 'name', e.target.value)}
                        className="form-control mb-2"
                      />
                      <input
                        value={editStates[car.ID].model}
                        onChange={(e) => handleEditChange(car.ID, 'model', e.target.value)}
                        className="form-control mb-2"
                      />
                      <input
                        value={editStates[car.ID].color}
                        onChange={(e) => handleEditChange(car.ID, 'color', e.target.value)}
                        className="form-control mb-2"
                      />
                      <button className="btn btn-success" onClick={() => handleSave(car.ID)}>Save</button>
                    </>
                  ) : (
                    <>
                      <h4 className="card-title">{car.Name}</h4>
                      <p className="card-text">
                        Model: {car.Model}<br />
                        Color: {car.Color}
                      </p>
                      <button className="btn btn-primary" onClick={() => handleToggleEdit(car.ID)}>Edit</button>
                      <button className="btn btn-danger px-2" onClick={() => handleDelete(car.ID)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarList;
