import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    fetch(`https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <p>Details: {product.description}</p>
     
    </div>
  );
};

export default ProductDetails;
