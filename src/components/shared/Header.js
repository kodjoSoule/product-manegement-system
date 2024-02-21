// src/components/shared/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/students">Liste des Étudiants</Link>
					</li>
					<li>
						<Link to="/admin/students">Gestion des Étudiants</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
