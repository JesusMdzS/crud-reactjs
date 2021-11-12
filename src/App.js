import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/components/home.js";
import Dashboard from "../src/components/dashboard.js";
import Editar from "./components/editar.js";
import Agendar from "./components/agendar.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route excat path="/" element={<Home />} />
        <Route excat path="/dashboard" element={<Dashboard />} />
        <Route excat path="/edit" element={<Editar />} />
        <Route excat path="/create" element={<Agendar />} />
      </Routes>
    </div>
  );
}

export default App;
