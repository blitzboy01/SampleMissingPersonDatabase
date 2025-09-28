
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import MissingPersonDetail from "./pages/MissingPersonDetail";

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/MissingPerson/:id" element={<MissingPersonDetail/>} />
        </Routes>
    );
}