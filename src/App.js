import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route  exact path="/" element={<Users />} />
					<Route path="/Home/:id" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
