import React from "react";
import NavBar from "./NavBar.jsx";
import ContactInfo from "./ContactInfo.jsx";
import { Link } from "react-router-dom";


const HomePage = () => {
	return (
		<section className="home-container">
			<section className="homepage-container main-content">
				<NavBar />
				<section className="main-description">
					<p>
						anpan is a light-weight <a href="https://redis.com/">Redis</a>{" "}
						Object Mapper (OM) built for <a href="https://bun.sh/">Bun</a>.
					</p>
				</section>
			</section>
			<section className="get-started main-content">
				<h2 className="get-started-title">Get Started</h2>
				<section className="get-started-content">
					<a
						href="https://www.npmjs.com/package/@breadisbuns/anpan"
						className="get-started-content-container"
					>
						<h3 className="get-started-content-title">Download the Library</h3>
						<p className="get-started-content-description">
							Head on over to NPM to install our Bun-compatible anpan library.
						</p>
					</a>
					<Link to="/CodeGenerator" className="get-started-content-container">
						<h3 className="get-started-content-title">Generate a Schema</h3>
						<p className="get-started-content-description">
							Build your schema using our handy generator - simply fill out the
							fields. Once you're done, click on the copy button, and paste it
							into your codebase.
						</p>
					</Link>
				</section>
			</section>
			<section className="main-features main-content">
				<h2 className="main-features-title">Main Features</h2>
				<section className="main-features-content">
					<section className="main-features-content-container">
						<h3 className="main-features-content-title">Simplification</h3>
						<p className="main-features-content-description">
							Streamline your Bun application effortlessly with anpan's mapping
							of Redis data structures.
						</p>
					</section>
					<section className="main-features-content-container">
						<h3 className="main-features-content-title">Validation</h3>
						<p className="main-features-content-description">
							Ensure data integrity and accuracy with anpan's schema validation.
						</p>
					</section>
					<section className="main-features-content-container">
						<h3 className="main-features-content-title">Query</h3>
						<p className="main-features-content-description">
							Efficiently retrieve and manipulate data using anpan's querying
							methods.
						</p>
					</section>
				</section>
			</section>
			<section>
				<ContactInfo />
			</section>
		</section>
	);
};

export default HomePage;
