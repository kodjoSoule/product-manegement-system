// src/components/user/UserStudentItem.js
import React from "react";
import { Link } from "react-router-dom";
import "./UserStyle.css";

const UserStudentItem = ({ student }) => {
	return (
		<div className="user-student-item">
			<Link to={`/students/${student.id}`} className="user-student-link">
				{`${student.nom} ${student.prenom} - Classe: ${student.classe}`}
			</Link>
			<div className="user-student-details">
				<p>Nom : {student.nom}</p>
				<p>Prenom : {student.prenom}</p>
				<p>Classe : {student.classe}</p>
			</div>
		</div>
	);
};

export default UserStudentItem;
