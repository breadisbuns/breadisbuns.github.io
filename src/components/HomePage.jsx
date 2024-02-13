import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.jsx';
import ContactInfo from "./ContactInfo.jsx";

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<section className="home-container">
			<NavBar />
			<section className="main-description">
				<p>anpan is a light-weight Redis Object Mapper (OM) built for Redis.</p>
			</section>
			<section className="main-features">
				<p>Main Features</p>
			</section>
			<section className="get-started">
				<p>Get Started</p>
			</section>
			<section>
				<ContactInfo />
			</section>
		</section>
	);
};

export default HomePage;