import React from "react";
import ContactCard from "./ContactCard.jsx";
import kellsy from '../../assets/Kellsy NL.png';
import may from '../../assets/May W.png';
import kevin from '../../assets/Kev Photo.png';
import dillon from '../../assets/Dillon H.png';

//Contact container housing all contact card information
class IndvlContact {
	constructor(photo, linkedin, github, name) {
		this.photo = photo;
		this.linkedin = linkedin;
		this.github = github;
		this.name = name;
	}
}

//create teamMembers var to hold all persons info
const Kellsy = new IndvlContact(
	kellsy,
	"https://www.linkedin.com/in/kellsy-nava-l%C3%B3pez/",
	"https://github.com/kelsIam",
	"Kellsy Nava-Lopez"
);
const May = new IndvlContact(
   may,
		"https://www.linkedin.com/in/may-wilcher/",
		"https://github.com/rehcliw",
		"May Wilcher"
);
const Kevin = new IndvlContact(
		kevin,
  "https://www.linkedin.com/in/kellsy-nava-l%C3%B3pez/",
		"https://github.com/murph212",
		"Kevin Murphy"
);
const Dillon = new IndvlContact(
	dillon,
	"https://www.linkedin.com/in/dillon-hale-8b8968161/",
	"https://github.com/HailsD",
	"Dillon Hale"
);
const teamMembers = [Kellsy, May, Kevin, Dillon];

function ContactInfo() {
	//loop through persons to render before
	const teamInfo = teamMembers.reduce((acc, person) => {
		acc.push(
			<ContactCard
				photo={person.photo}
				linkedin={person.linkedin}
				github={person.github}
				name={person.name}
				key={person.name}
			/>
		);
		return acc;
	}, []);
	return (
		<section className="ContactInfo-container">
			<h2>Meet the Team</h2>
			<ul className="contact-info">{teamInfo}</ul>
		</section>
	);
}

export default ContactInfo;