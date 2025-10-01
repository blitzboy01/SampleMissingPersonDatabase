
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import MissingPersonDetail from "./pages/MissingPersonDetail";
import PageTitle from "./components/PageTitle";

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<>
                <PageTitle title ="Missing Person Database - Home"/>
                <HomePage/>
                </>}/>
            <Route path="/dashboard" element={<>
                <PageTitle title ="Missing Person Database - Dashboard"/>
                <Dashboard/> </>}/>
            <Route path="/about" element={
                <>
                <PageTitle title ="Missing Person Database - About"/>
                <About/>
                </>}/>
            <Route path="/contact" element={
                <>
                <PageTitle title ="Missing Person Database - Contact Us"/>
            <Contact/></>}/>
            <Route path="/MissingPerson/:id" element={<>
            <MissingPersonDetail/></>} />
        </Routes>
    );
}