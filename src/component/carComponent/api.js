const apiUrl = 'https://kerrysapi.chickenkiller.com/api/';

//http://kerrysapi.chickenkiller.com/api/cars
export const getCars = async () => {
  try {
    const response = await fetch(`${apiUrl}cars`); // Ensure the URL is correctly formatted
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return []; // Return an empty array on error
  }
};

export const createCar = async (car) => {
  try {
    const response = await fetch(`${apiUrl}carsadd`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to create a car:", error);
    return null; // Handle errors appropriately
  }
};

export const updateCar = async (id, car) => {
  try {
    const response = await fetch(`${apiUrl}cars/${id}/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to update car:", error);
    return null;
  }
};

export const deleteCar = async (id) => {
  try {
    const response = await fetch(`${apiUrl}carsdelete/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to delete car:", error);
    return null;
  }
};