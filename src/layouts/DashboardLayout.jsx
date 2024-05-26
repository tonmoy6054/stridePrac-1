/* eslint-disable react/prop-types */

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { FaUser, FaTrash, FaEdit, FaInfoCircle, FaPlus } from 'react-icons/fa';
import Sidebar from './Sidebar';

const auth = getAuth(app);

const Dashboard = ({ navigateToDetails }) => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUsers(prevUsers => [...prevUsers, user]);
      } else {
        
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    
    fetch('/data/category.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleDelete = (id) => {
   
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
  
    alert("Category deleted successfully!");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
              {users.map((user, index) => (
                <li key={index} className="flex items-center mb-2">
                  <FaUser className="mr-2 text-blue-500" />
                  <div>
                    <p>{user.email}</p>
                    <p>Name: {user.displayName}</p> 
                    <p>UID: {user.uid}</p> 
                    <p>AccessToken: {user.accessToken}</p> 
                    <p>Phone Number: {user.phoneNumber}</p> 
                    <img src={user.
photoURL} alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Categories</h1>
          <Link to="/add-product" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FaPlus className="mr-2" />
            Add Product
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
              <h2 className="text-lg font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center">
                <Link to={`/product-details/${category.id}`} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={() => navigateToDetails(category.id)}
                >
                  <FaInfoCircle className="mr-2" />
                  Details
                </Link>
                <Link to={`/edit-product/${category.id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <FaEdit className="mr-2" />
                  Edit
                </Link>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={() => handleDelete(category.id)}
                >
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



