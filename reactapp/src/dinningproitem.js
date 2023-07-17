import React, { useContext }  from 'react';
import Rating from './rating';
// import { useNavigate } from 'react-router-dom';
import { CartContext } from './cartContext';

const DinningproductItem = ({ product}) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p><span>&#8377;</span>{product.price}</p>
      <Rating rating={product.rating} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DinningproductItem;



