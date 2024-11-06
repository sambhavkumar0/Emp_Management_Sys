import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";
import TeamPage from "./components/TeamPage";
import ComingSoon from "./components/ComingSoon";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/teampage" element={<TeamPage />} />
        {/* Optional: Add a login route */}
        <Route path="/login" element={<ComingSoon />} />
        {/* Optional: Add a fallback route */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

export default App;
