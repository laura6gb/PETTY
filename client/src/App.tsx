import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Inicio from "./components/Inicio";
import Home from "./components/Home";
import Pets from "./components/Pets";
import AddPet from "./components/AddPet";
import Tratamiento from "./components/Tratamiento";
import Fact from "./components/Fact";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/addpet" element={<AddPet />} />
        <Route path="/tratamiento" element={<Tratamiento />} />
        <Route path="/fact" element={<Fact />} />
      </Routes>
    </Router>
  );
};

export default App;
