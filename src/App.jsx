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
import ContactUs from "./pages/ContactUs";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundAndCancel from "./pages/RefundAndCancel";
import PageNotFound from "./pages/PageNotFound";
import DeleteAccount from "./pages/DeleteAccount";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyOtp from "./pages/VerifyOtp";



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
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancel" element={<RefundAndCancel />} />
        <Route path="/remove-account" element={<DeleteAccount />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CartSidebar  />
      <EditModal />
      <Footer />
    </Router>
  );
};

export default App;