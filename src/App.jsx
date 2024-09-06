import Home from "./pages/Home";
import { Navbar } from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Home />
		</Router>
	);
}
