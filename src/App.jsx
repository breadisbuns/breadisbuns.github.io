import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "../stylesheets/styles.scss";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import CodeGenerator from "./components/CodeGenerator.jsx";

const Layout = () => {
    return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

const NotFound = () => <h1> 404 Page Not Found</h1>;

//rendering app:
const App = () => {
	return (
		<div>
				<Routes>
					<Route path="/" element={<Layout />} >
						<Route index element={<HomePage />} />
						<Route path="CodeGenerator" element={<CodeGenerator />} />
						<Route path="*" element={<NotFound />} />
					</Route >
				</Routes>
		</div>
	);
};

export default App;