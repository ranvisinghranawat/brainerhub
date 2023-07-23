import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,incrementCartCount  } from "../redux/action";
import img1 from '../images/bag 2.jpg'; 
import img2 from '../images/bag3.jpg'; 
import img3 from '../images/bag4.jpg'; 

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: img1, 
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: img2, 
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: img3, 
  },

  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: img1, 
  },
];

const Dashboard = () => {
  const cartCount = useSelector((state) => state.cartCount);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(incrementCartCount())
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <h2>Welcome to the Dashboard!</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ display: "inline-block", margin: "20px" }}>
            <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

