import Home from "./pages/Home";
import { Navbar } from "./components/NavBar";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	const [isRerouted, setIsRerouted] = useState(false);

	useEffect(() => {
		if (window.location.pathname === "/" && !window.location.hash) {
			// Having this in the url is important for the editor to detect editing and rerouting to vitessce
			// TODO:  depending on how Vitessce would be mounted, this logic can be changed
			navigate("#?edit=true", { replace: true });
		}
		setIsRerouted(true);
	}, [navigate]);

	return (
		<>
			<Navbar />
			{isRerouted && <Home />}
		</>
	);
}
export default function RootApp() {
	return (
		<Router>
			<App />
		</Router>
	);
}
