import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    fetch(`/data/category.json`)
      .then(response => response.json())
      .then(data => {
        
        const foundProduct = data.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <div>
      {product ? (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <img src={product.image} alt={product.name} className="mb-4" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          <p className="text-gray-600">Created At: {product.createdAt}</p>
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
