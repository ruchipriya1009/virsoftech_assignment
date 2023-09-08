import React from "react";
import { Link } from "react-router-dom";
import "./Style/CartPage.css";

const CartPage = ({ products, onRemoveFromCart }) => {
  return (
    <div>
      <h2>CART PAGE</h2>
      <div className="cart-icon">
        <Link to="/confirm-order">
          <button>Checkout</button>
        </Link>
      </div>
      {products.length === 0 ? ( // Check if the cart is empty
        <img style={{width:"500px", height:"300px",marginTop:"50px"}}  className="cartIsEmpty" src="https://th.bing.com/th/id/OIP.r6aijQ7gtefVW3pa7N_t7AHaFQ?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="EmptyCartImage"/>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id}>
              <img className="image" src={product.image} alt="productImage" />
              <p className="name">{product.name}</p>
              <p>Price: ${product.price}</p>
              
              <button onClick={() => onRemoveFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
