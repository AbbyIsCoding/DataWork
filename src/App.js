// Filename - App.js

import React from "react";
import Navbar from "./Components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Home from "./Home";
import DemoWork from "./DemoWork";


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/DemoWork" element={<DemoWork />} />
			</Routes>
		</Router>
	);
}

export default App;
