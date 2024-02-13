import React from "react";
import ContactCard from "./ContactCard.jsx";
//import headshots from assets

//Contact container housing all contact card information
// class IndvlContact {
// 	constructor(photo, linkedin, github, name) {
// 		this.photo = photo;
// 		this.linkedin = linkedin;
// 		this.github = github;
// 		this.name = name;
// 	}
// }

class IndvlContact {
	constructor(linkedin, github, name) {
		this.linkedin = linkedin;
		this.github = github;
		this.name = name;
	}
}

//create teamMembers var to hold all persons info
const Kellsy = new IndvlContact(
	"https://www.linkedin.com/in/kellsy-nava-l%C3%B3pez/",
	"https://github.com/kelsIam",
	"Kellsy Nava-Lopez"
);
// const Kellsy = new IndvlContact(
//    kellsy (photo),
// 		"https://www.linkedin.com/in/kellsy-nava-l%C3%B3pez/",
// 		"https://github.com/kelsIam",
// 		"Kellsy Nava-Lopez"
// );
// const Kellsy = new IndvlContact(
// 		kellsy (photo)
//   "https://www.linkedin.com/in/kellsy-nava-l%C3%B3pez/",
// 		"https://github.com/kelsIam",
// 		"Kellsy Nava-Lopez"
// );
// const Kellsy = new IndvlContact(
//  kellsy (photo)
// 	"https://www.linkedin.com/in/kellsy-nava-l%C3%B3pez/",
// 	"https://github.com/kelsIam", 'Kellsy Nava-Lopez'
// );
const teamMembers = [Kellsy];

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