// src/components/user/UserStudentList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserStudentItem from "./StudentItem";
import "./UserStyle.css";
const UserStudentList = () => {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		console.info("running");
		axios
			.get("http://localhost:3333/students")
			.then((response) => {
				console.log("loading  : " + response.data);

				setStudents(response.data);
			})
			.catch((error) => {
				console.error("Erreur lors du chargement des étudiants:", error);
			});
	}, []);

	return (
		<div className="user-student-list">
			<h2>Liste des Étudiants (Utilisateurs)</h2>
			<ul>
				{students.map((student) => (
					<UserStudentItem key={student.id} student={student} />
				))}
			</ul>
		</div>
	);
};

export default UserStudentList;
