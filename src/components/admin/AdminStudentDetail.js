// src/components/admin/AdminStudentDetail.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AdminStyle.css";

const AdminStudentDetail = () => {
	const { studentId } = useParams();
	const [student, setStudent] = useState(null);
	const history = useNavigate;

	useEffect(() => {
		axios
			.get(`http://localhost:3333/students/${studentId}`)
			.then((response) => {
				setStudent(response.data);
			})
			.catch((error) => {
				console.error("Error loading student details:", error);
				// Optionally: redirect to a not-found page or handle the error
				// history.push("/not-found");
			});
	}, [studentId]);

	const handleEditClick = () => {
		// Redirect to the edit page for this student
		history.push(`/admin/students/${studentId}/edit`);
	};

	const handleDeleteClick = () => {
		// Perform the delete action (you may want to show a confirmation modal)
		axios
			.delete(`http://localhost:3333/students/${studentId}`)
			.then(() => {
				console.log("Student deleted successfully");
				// Redirect to the student list after deletion
				history.push("/admin/students");
			})
			.catch((error) => {
				console.error("Error deleting student:", error);
			});
	};

	if (!student) {
		return <p>Loading student details...</p>;
	}

	return (
		<div className="admin-student-detail">
			<h2>Student Details (Admins)</h2>
			<div className="admin-student-detail-info">
				<div className="admin-student-detail-label">Nom:</div>
				<div className="admin-student-detail-value">{student.nom}</div>

				<div className="admin-student-detail-label">Prénom:</div>
				<div className="admin-student-detail-value">{student.prenom}</div>

				<div className="admin-student-detail-label">Classe:</div>
				<div className="admin-student-detail-value">{student.classe}</div>
			</div>

			<div className="admin-student-buttons">
				<button className="admin-edit-button" onClick={handleEditClick}>
					Edit
				</button>
				<button className="admin-delete-button" onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default AdminStudentDetail;
