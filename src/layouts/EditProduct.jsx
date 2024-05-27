import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/data/category.json')
            .then(response => response.json())
            .then(data => {
                const foundProduct = data.find(item => item.id === parseInt(id)); 
                setProduct(foundProduct);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [id]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Product updated successfully!');
      
       
        toast.success('Product updated successfully!', {
          position: toast.POSITION.TOP_CENTER
        });
      };
      
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Product Name</label>
                    <input type="text" id="name" name="name" value={product.name} className="border rounded-md px-4 py-2 w-full" readOnly />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
                    <textarea id="description" name="description" value={product.description} className="border rounded-md px-4 py-2 w-full" readOnly></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
