import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/fragments/Navbar";
import Landing from "./components/fragments/Landing";
import Register from "./components/fragments/Register";
import Dashboard from "./components/fragments/Dashboard";
import Menuhot from './components/fragments/Menuhot';
import MenuQoma from './components/fragments/MenuQoma';
import Menualdiano from './components/fragments/Menualdiano';
import Menujusbonbin from './components/fragments/Menujusbonbin';
import Analytics from './components/fragments/Analytics';
import Login from './components/fragments/Login';
import Pesanan from './components/fragments/pesanan';
import Menu from './components/fragments/Menu';



// 🔹 Import halaman Warung
import Warung1 from "./components/fragments/Warung1";
import Warung2 from "./components/fragments/Warung2";
import Warung3 from "./components/fragments/Warung3";
import Warung4 from "./components/fragments/Warung4";


function App() {
  return (
    <Router>
      {/* Navbar selalu tampil */}
      <Navbar />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Landing />} />

        {/* Halaman login & register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Menu" element={<Menu />} />

        {/* Halaman dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🔹 Halaman kantin */}
        <Route path="/Warung1" element={<Warung1 />} />
        <Route path="/Warung2" element={<Warung2 />} />
        <Route path="/Warung3" element={<Warung3 />} />
        <Route path="/Warung4" element={<Warung4 />} />


        <Route path="/Menuhot" element ={<Menuhot/>} />
        <Route path="/MenuQoma" element ={<MenuQoma/>} />
        <Route path="/Menualdiano" element ={<Menualdiano/>} />
        <Route path="/Menujusbonbin" element ={<Menujusbonbin/>} />


        
      </Routes>
    </Router>
  );
}

export default App;
