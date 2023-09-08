import React, { useState } from "react";
import "./Style/CataloguePage.css" 
const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    const newQuantity = quantity +1;
    // console.log(`Adding ${product.name} to cart. New quantity: ${newQuantity}`);
    onAddToCart(product, newQuantity);
    setQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <img className="product-image " src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
     
      <p>Price: ${product.price}</p>
      {quantity === 0 ? (
        <button onClick={addToCart} className="add-to-cart-button">Add Quantity</button>
      ) : (
        <div className="size">
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          {quantity}
          <button onClick={addToCart} disabled={quantity >= 6}>+</button>
        </div>
      )}
    </div>
  );
};

export default Product;
