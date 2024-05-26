import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/category.json');
        const data = await response.json();
        setCategories(data.slice(0, 4)); // Display only the first 4 categories
      } catch (error) {
        console.error('Error fetching the categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleSeeAll = () => {
    navigate('/all-categories');
  };

  return (
    <div className="py-12 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={category.image} alt={category.name} className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSeeAll}
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
