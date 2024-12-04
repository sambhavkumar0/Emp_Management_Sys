import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const Features = lazy(() => import("./components/Features"));
const Contact = lazy(() => import("./components/Contact"));
const TeamPage = lazy(() => import("./components/TeamPage"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const LoginRegisterPage = lazy(() => import("./components/LoginRegisterPage"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/teampage" element={<TeamPage />} />
          <Route path="/loginregisterpage" element={<ComingSoon />} />
          <Route path="*" element={<LoginRegisterPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
