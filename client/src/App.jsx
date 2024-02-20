import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />
      {/* Main section */}
      <main className="bg-gray-100 h-screen">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
