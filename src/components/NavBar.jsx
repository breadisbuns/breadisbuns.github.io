import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNpm } from 'react-icons/si';
//import logo from assets

// Navbar container with linked routes
const NavBar = () => {
  return (
		<nav className="NavBar-Container">
			<nav className="NavBar">
				<div className="Nav-title">
					{/* add logo here */}
					<h3>anpan</h3>
				</div>
				<ul className="nav-links">
					<li>
						<Link to="/" className="home">
							Home
						</Link>
					</li>
					<li>
						<button className="schema-btn">
							<Link to="/CodeGenerator" className="generate_schema">
								Generate Schema
							</Link>
						</button>
						{/* schema button here: 
            <button onClick={() => navigate("/CodeGenerator")}> Generate Schema
			      </button>*/}
					</li>
					<li className="socials">
						<a href="https://github.com/oslabs-beta/anpan">
							<AiOutlineGithub className="Nav-Github" />
						</a>
					</li>
					<li className="socials">
						<a href="https://www.npmjs.com/package/@breadisbuns/anpan">
							<SiNpm className="Nav-Npm" />
						</a>
					</li>
				</ul>
			</nav>
		</nav>
	);
};

export default NavBar;