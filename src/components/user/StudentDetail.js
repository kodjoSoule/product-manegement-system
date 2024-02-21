// src/components/user/UserStudentDetail.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserStudentDetail = () => {
	const { studentId } = useParams();
	const [student, setStudent] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3333/students/${studentId}`)
			.then((response) => {
				setStudent(response.data);
			})
			.catch((error) => {
				console.error(
					"Erreur lors du chargement des détails de l'étudiant:",
					error
				);
			});
	}, [studentId]);

	if (!student) {
		return <p>Chargement des détails de l'étudiant...</p>;
	}

	return (
		<div className="user-student-detail">
			<h2>Détails de l'Étudiant (Utilisateurs)</h2>
			<p>Nom: {student.nom}</p>
			<p>Prénom: {student.prenom}</p>
			<p>Classe: {student.classe}</p>
			<Link to="/students" className="user-student-back-link">
				Retour à la liste des étudiants
			</Link>
		</div>
	);
};

export default UserStudentDetail;
