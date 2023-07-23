import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { ListItemText, Typography, Grid } from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems); 

  if (cartItems.length === 0) {
    return (
      <div>
        <Header />
        <Typography variant="h6">Cart is empty.</Typography>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Typography variant="h6">Cart Product List</Typography>
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
