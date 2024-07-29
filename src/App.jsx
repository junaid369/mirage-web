import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/Abouts/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import MeetTeam from "./pages/MeetTeam/MeetTeam";
import News from "./pages/News/News";
import TradingPlatform5 from "./pages/Platform/MT5";
import TradingPlatform4 from "./pages/Platform/MT4";
import Forex from "./pages/Forex/Forex";
import Indices from "./pages/Indices/Indices";

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
          <Route path="/Team" element={<MeetTeam />} />
          <Route path="/News" element={<News />} />
          <Route path="/MT5" element={<TradingPlatform5 />} />
          <Route path="/MT4" element={<TradingPlatform4 />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/indices" element={<Indices />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
