import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Error from "./pages/Error";
import Home from "./pages/Home";


/**
 * React component to display the app
 */

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Users />} />
					<Route path="/Home/:id" element={<Home />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
