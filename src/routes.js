import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


import Home from "./containers/Home";
import From from "./containers/Form";


function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assinar" element={<From />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes