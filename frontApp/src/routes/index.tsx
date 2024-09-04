import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/Products/ProductPage';
import Login from '../pages/Login';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<Login />} />
        {/* Defina outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
