import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action";
import { AppBar, Toolbar, Typography, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ cartCount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/dashboard" style={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}>
          My Website
        </Typography>
        <Button component={Link} to="/cart" color="inherit" startIcon={<Badge badgeContent={cartCount} color="error"><ShoppingCartIcon /></Badge>}>
          Cart
        </Button>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
