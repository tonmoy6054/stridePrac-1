
// /* eslint-disable react/prop-types */

// import { getAuth, onAuthStateChanged, } from 'firebase/auth';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import app from '../firebase/firebase.config';
// import { FaUser, FaTrash, FaEdit, FaInfoCircle, FaPlus } from 'react-icons/fa';
// import Sidebar from './Sidebar';

// const auth = getAuth(app);
// console.log(auth.currentUser);
// // const email = auth.currentUser.email;
// // console.log('User Email:', email);
// const Dashboard = () => {
//   const [categories, setCategories] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUsers(prevUsers => [...prevUsers, user]);
//       } else {
//         console.log('No user is signed in.');
//       }
//     });

//     return () => unsubscribe();
//   }, []);
//   useEffect(()=>{
//     fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       setUsers(data)
//     })
//   }, [])



//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     fetch('http://localhost:3000/products')
//       .then(response => response.json())
//       .then(data => setCategories(data))
//       .catch(error => console.error('Error fetching categories:', error));
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' })
//       .then(response => response.json())
//       .then(() => {
//         const updatedCategories = categories.filter(category => category._id !== id);
//         console.log(updatedCategories);
//         setCategories(updatedCategories);
//         alert("Category deleted successfully!");
//       })
//       .catch(error => console.error('Error deleting category:', error));
//   };
  

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-8 bg-gray-100">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Users</h2>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <ul>
//               {users.map((user, index) => (
//                 <li key={index} className="flex items-center mb-2">
//                   <FaUser className="mr-2 text-blue-500" />
//                   <div>
//                     <p>{user.email}</p>
//                     <p>Name: {user.displayName}</p>
//                     <p>UID: {user.uid}</p>
//                     <p>AccessToken: {user.accessToken}</p>
//                     <p>Phone Number: {user.phoneNumber}</p>
//                     <img src={user.photoURL} alt="" />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Added products</h1>
//           <Link to="/add-product" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
//             <FaPlus className="mr-2" />
//             Add Product
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
//           {categories.map(category => (
//             <div key={category.id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
//               <h2 className="text-lg font-bold mb-2">{category.name}</h2>
//               <p className="text-gray-600 mb-4">{category.description}</p>
//               <div className="flex items-center">
//               <Link
//    to={`/products/${category._id}`}
//   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
  
// >
//   <FaInfoCircle className="mr-2" />
//   Details
// </Link>

//                 <Link to={`/edit-product/${category._id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
//                   <FaEdit className="mr-2" />
//                   Edit
//                 </Link>
//                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => handleDelete(category._id)}>
//                   <FaTrash className="mr-2" />
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { FaUser, FaTrash, FaEdit, FaInfoCircle, FaPlus } from 'react-icons/fa';
import Sidebar from './Sidebar';

const auth = getAuth(app);

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
// console.log(userData);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        setUserData(data);
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [user]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        const updatedCategories = categories.filter(category => category._id !== id);
        console.log(updatedCategories);
        setCategories(updatedCategories);
        alert("Category deleted successfully!");
      })
      .catch(error => console.error('Error deleting category:', error));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            {user ? (
              <div className="flex items-center mb-2">
                <FaUser className="mr-2 text-blue-500" />
                <div>
                  <p>{user.email}</p>
                  <p>Name: {user.displayName}</p>
                  <p>UID: {user.uid}</p>
                  <p>AccessToken: {user.stsTokenManager.accessToken}</p>
                  <p>Phone Number: {user.phoneNumber}</p>
                  {user.photoURL && <img src={user.photoURL} alt="User Profile" />}
                </div>
               <Link to={`/profile/edit/${userData?._id}`}> <button className='btn btn-ghost'>Edit Profile</button></Link>
              </div>
            ) : (
              <p>No user is signed in.</p>
            )}
            {userData && (
              <div>
                <h3 className="text-xl font-bold">User Data from Fetch:</h3>
                <p>Email: {userData.email}</p>
                <p>Name: {userData.displayName}</p>
                {/* Add more user data fields as needed */}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Added products</h1>
          <Link to="/add-product" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FaPlus className="mr-2" />
            Add Product
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {categories.map(category => (
            <div key={category._id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
              <h2 className="text-lg font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center">
                <Link to={`/products/${category._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <FaInfoCircle className="mr-2" />
                  Details
                </Link>
                <Link to={`/edit-product/${category._id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <FaEdit className="mr-2" />
                  Edit
                </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => handleDelete(category._id)}>
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
