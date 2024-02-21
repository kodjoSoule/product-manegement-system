// src/components/admin/AdminStudentList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminStudentItem from "./AdminStudentItem";
import "./AdminStyle.css";
import { Link } from "react-router-dom";
const AdminStudentList = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3333/students")
			.then((response) => {
				setStudents(response.data);
			})
			.catch((error) => {
				console.error("Erreur lors du chargement des étudiants:", error);
			});
	}, []);

	return (
		<div className="admin-student-list">
			<div className="admin-student-header">
				<h2>Liste des Étudiants (Administrateurs)</h2>
				<Link to="/admin/add-student" className="admin-student-btn">
					Ajouter Étudiant
				</Link>
			</div>
			<ul>
				{students.map((student) => (
					<AdminStudentItem key={student.id} student={student} />
				))}
			</ul>
		</div>
	);
};

export default AdminStudentList;
