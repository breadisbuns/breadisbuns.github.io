import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.jsx';
import ContactInfo from "./ContactInfo.jsx";

const HomePage = () => {
	// const navigate = useNavigate();
	return (
		<section className="home-container">
			<section className="homepage-container main-content">
				<NavBar />
				<section className="main-description">
					<p>
						anpan is a light-weight Redis Object Mapper (OM) built for Redis.
					</p>
				</section>
			</section>
			<section className="main-features main-content">
				<p>Main Features</p>
			</section>
			<section className="get-started main-content">
				<h2 className="get-started-title">Get Started</h2>
			</section>
			<section>
				<ContactInfo />
			</section>
		</section>
	);
};

export default HomePage;