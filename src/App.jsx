import Home from "./pages/Home";
import Study from "./pages/Study";
import { Navbar } from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/study" element={<Study />} />
			</Routes>
		</Router>
	);
}
