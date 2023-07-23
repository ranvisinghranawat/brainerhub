import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";

const NotFound = () => {
  return <div>404 - Page Not Found</div>;
};

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginForm />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

