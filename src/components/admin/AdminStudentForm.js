// src/components/admin/AdminStudentForm.js
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminStudentForm = () => {
	const { studentId } = useParams();
	const [studentData, setStudentData] = useState({
		nom: "",
		prenom: "",
		classe: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setStudentData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3333/students", studentData)
			.then((response) => {
				console.log("Étudiant ajouté avec succès:", response.data);
				setStudentData({
					nom: "",
					prenom: "",
					classe: "",
				});
			})
			.catch((error) => {
				console.error("Erreur lors de l'ajout de l'étudiant:", error);
			});
	};

	return (
		<div className="admin-student-form">
			<h2>
				{studentId ? "Modifier" : "Ajouter"} un Étudiant (Administrateurs)
			</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Nom:
					<input
						type="text"
						name="nom"
						value={studentData.nom}
						onChange={handleInputChange}
					/>
				</label>
				<br />
				<label>
					Prénom:
					<input
						type="text"
						name="prenom"
						value={studentData.prenom}
						onChange={handleInputChange}
					/>
				</label>
				<br />
				<label>
					Classe:
					<input
						type="text"
						name="classe"
						value={studentData.classe}
						onChange={handleInputChange}
					/>
				</label>
				<br />
				<button type="submit">
					{studentId ? "Modifier" : "Ajouter"} Étudiant
				</button>
			</form>
		</div>
	);
};

export default AdminStudentForm;
