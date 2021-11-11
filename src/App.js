import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/components/home.js";
import Dashboard from "../src/components/dashboard.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
