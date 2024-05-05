import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


import Home from "./containers/Home";
import From from "./containers/Form";
import Planos from "./containers/Planos";
import Sobre from "./containers/Sobre";
import Local from "./containers/Local";

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/planos" element={<Planos />} />
                <Route path="/assinar" element={<From />} />
                <Route path="/local" element={<Local />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes