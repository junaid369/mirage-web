import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/Abouts/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Careers" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
