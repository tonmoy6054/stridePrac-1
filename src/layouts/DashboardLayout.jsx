/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';

const Dashboard = ({ navigateToDetails, navigateToEdit }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from category.json
    fetch('/data/category.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleDelete = (id) => {
    // Delete logic
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
    // Show success message
    alert("Category deleted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">All Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="flex justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigateToDetails(category.id)}
              >
                Details
              </button>
              <button 
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigateToEdit(category.id)}
              >
                Edit
              </button>
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(category.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
