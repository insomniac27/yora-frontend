import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import CartSidebar from "./components/Cart/CartSidebar";
import EditModal from "./components/Cart/EditModal"; 


const App = () => {

  return (
    <Router>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList  />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <CartSidebar  />
      <EditModal />
      <Footer />
    </Router>
  );
};

export default App;