import React from "react";

// Components and pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Routers
import { Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Navbar />
			<Route path={["/game/:id", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
