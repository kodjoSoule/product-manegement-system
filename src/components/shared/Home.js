// src/components/shared/Home.js
import React from "react";
import studentImage from "./img.webp";

const Home = () => {
	return (
		<div className="home-container">
			<div className="image-container">
				{/* <img src={studentImage} alt="Student" className="student-image" /> */}
			</div>
			<div className="home-content">
				<h2>Bienvenue dans le système de gestion des étudiants</h2>
				<p>
					Explorez les informations des étudiants et effectuez des opérations de
					gestion en toute simplicité.
				</p>
			</div>
		</div>
	);
};

export default Home;
