// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AddProduct = () => {
//   const [formData, setFormData] = useState({ name: '', description: '' });

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const {name, description, createdAt} = formData;
//     await fetch('https://r-p-server-ltnrm38y1-tonmoy6054s-projects.vercel.app/products', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',

//       },
//       body: JSON.stringify({name, description}),
//     })
//     .then(res => res.json())
//     .then(data=> {
//       console.log(data);
//       setFormData({ name: '', description: '' });
//       toast.success("Product added successfully!");
//     })
    
   
    
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-bold mb-2">Product Name</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border rounded-md px-4 py-2 w-full" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
//           <textarea id="description" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="border rounded-md px-4 py-2 w-full"></textarea>
//         </div>
//         <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
//       </form>
      
//       <Link to="/" className="block mt-4 text-blue-500 hover:underline">Back to Dashboard</Link>
//     </div>
//   );
// };

// export default AddProduct;


/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AddProduct = () => {
//   const [formData, setFormData] = useState({ name: '', description: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, description } = formData;

//     try {
//       const response = await fetch('https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, description }),
//       });

//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log(data);
//       setFormData({ name: '', description: '' });
//       toast.success("Product added successfully!");
//     } catch (error) {
//       console.error('Error adding product:', error);
//       toast.error('Failed to add product. Please try again.');
//     }
//   };

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description } = formData;

    // Get the current user and their token
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      toast.error("User not authenticated!");
      return;
    }

    try {
      const token = await user.getIdToken();

      const response = await fetch('https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/products', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setFormData({ name: '', description: '' });
      toast.success("Product added successfully!");
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">Product Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border rounded-md px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="border rounded-md px-4 py-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
      </form>
      
      <Link to="/" className="block mt-4 text-blue-500 hover:underline">Back to Dashboard</Link>
    </div>
  );
};

export default AddProduct;
