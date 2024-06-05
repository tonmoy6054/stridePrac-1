// import  { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


// const data = [
//   {
//     "id": 1,
//     "name": "Electronics",
//     "description": "Latest and greatest electronic gadgets",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZllrpjv97Iat45qBdOKnbI8Ln6RrKSF1kZYE3vwQ2Uw&s",
//     "createdAt": "2023-05-01T10:00:00Z"
//   },
//   {
//     "id": 2,
//     "name": "Books",
//     "description": "A wide range of books from various genres",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7Tmr__b0nsBDaeBsD8sY3iuiIFQiX2XSylMckN73JA&s",
//     "createdAt": "2023-05-02T11:00:00Z"
//   },
//   {
//     "id": 3,
//     "name": "Clothing",
//     "description": "Fashionable clothing for men, women, and children",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcjSHDk5gz-QkuWJ34uikKu3YqfJeW2XhnOWvW82_sg&s",
//     "createdAt": "2023-05-03T12:00:00Z"
//   },
//   {
//     "id": 4,
//     "name": "Home & Kitchen",
//     "description": "Essentials and accessories for your home and kitchen",
//     "image": "https://media.designcafe.com/wp-content/uploads/2020/06/09015014/kitchen-decor-and-decorating-ideas-for-your-home.jpg",
//     "createdAt": "2023-05-04T13:00:00Z"
//   },
//   {
//     "id": 5,
//     "name": "Toys & Games",
//     "description": "Fun toys and games for kids of all ages",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTT-0G84tTkhNVtxQZ1uNCZITdTJGsDkPug&s",
//     "createdAt": "2023-05-05T14:00:00Z"
//   },
//   {
//     "id": 6,
//     "name": "Sports & Outdoors",
//     "description": "Gear and equipment for sports and outdoor activities",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdPrC1Zp1_p7ywQMA228ZAbKLqNavYEqm-xaK8r77A1le7PsFgK3pHFnY9nNV-EyM0jo&usqp=CAU",
//     "createdAt": "2023-05-06T15:00:00Z"
//   },
//   {
//     "id": 7,
//     "name": "Beauty & Personal Care",
//     "description": "Products to enhance your beauty and personal care",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlBfl7qO7jPhUUPsxbBdY6Z8L16w94VWJ0GTRV1bk6Q&s",
//     "createdAt": "2023-05-07T16:00:00Z"
//   },
//   {
//     "id": 8,
//     "name": "Automotive",
//     "description": "Automotive parts and accessories",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpNPi9mdTS2UUsD1yMwNmYCN-QoA58R07HpIbHHOvXQ&s",
//     "createdAt": "2023-05-08T17:00:00Z"
//   }
// ]








// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('data');
//         const data = await response.json();
//         setCategories(data.slice(0, 4)); 
//       } catch (error) {
//         console.error('Error fetching the categories:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSeeAll = () => {
//     navigate('/all-categories');
//   };

//   return (
//     <div className="py-12 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           {categories.map((category) => (
//             <div key={category.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//               <img src={category.image} alt={category.name} className="w-32 h-32 rounded-full mb-4" />
//               <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
//               <p className="text-sm text-gray-600">{category.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="button"
//             onClick={handleSeeAll}
//             className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             See All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    "id": 1,
    "name": "Electronics",
    "description": "Latest and greatest electronic gadgets",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZllrpjv97Iat45qBdOKnbI8Ln6RrKSF1kZYE3vwQ2Uw&s",
    "createdAt": "2023-05-01T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Books",
    "description": "A wide range of books from various genres",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7Tmr__b0nsBDaeBsD8sY3iuiIFQiX2XSylMckN73JA&s",
    "createdAt": "2023-05-02T11:00:00Z"
  },
  {
    "id": 3,
    "name": "Clothing",
    "description": "Fashionable clothing for men, women, and children",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcjSHDk5gz-QkuWJ34uikKu3YqfJeW2XhnOWvW82_sg&s",
    "createdAt": "2023-05-03T12:00:00Z"
  },
  {
    "id": 4,
    "name": "Home & Kitchen",
    "description": "Essentials and accessories for your home and kitchen",
    "image": "https://media.designcafe.com/wp-content/uploads/2020/06/09015014/kitchen-decor-and-decorating-ideas-for-your-home.jpg",
    "createdAt": "2023-05-04T13:00:00Z"
  },
  {
    "id": 5,
    "name": "Toys & Games",
    "description": "Fun toys and games for kids of all ages",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTT-0G84tTkhNVtxQZ1uNCZITdTJGsDkPug&s",
    "createdAt": "2023-05-05T14:00:00Z"
  },
  {
    "id": 6,
    "name": "Sports & Outdoors",
    "description": "Gear and equipment for sports and outdoor activities",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdPrC1Zp1_p7ywQMA228ZAbKLqNavYEqm-xaK8r77A1le7PsFgK3pHFnY9nNV-EyM0jo&usqp=CAU",
    "createdAt": "2023-05-06T15:00:00Z"
  },
  {
    "id": 7,
    "name": "Beauty & Personal Care",
    "description": "Products to enhance your beauty and personal care",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlBfl7qO7jPhUUPsxbBdY6Z8L16w94VWJ0GTRV1bk6Q&s",
    "createdAt": "2023-05-07T16:00:00Z"
  },
  {
    "id": 8,
    "name": "Automotive",
    "description": "Automotive parts and accessories",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpNPi9mdTS2UUsD1yMwNmYCN-QoA58R07HpIbHHOvXQ&s",
    "createdAt": "2023-05-08T17:00:00Z"
  }
]


const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    setCategories(data);
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
