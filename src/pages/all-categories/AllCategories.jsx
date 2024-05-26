import  { useState, useEffect } from 'react';

const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/category.json');
        const data = await response.json();
        setCategories(data); // Display all categories
      } catch (error) {
        console.error('Error fetching the categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">All Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={category.image} alt={category.name} className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
