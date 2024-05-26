import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success("Product added successfully!");
    
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
