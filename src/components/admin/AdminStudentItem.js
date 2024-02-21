// src/components/admin/AdminStudentItem.js
import React from "react";
import { Link } from "react-router-dom";

const AdminStudentItem = ({ student }) => {
	return (
		<div className="admin-student-item">
			<Link to={`/admin/students/${student.id}`} className="admin-student-link">
				{`${student.nom} ${student.prenom} - Classe: ${student.classe}`}
			</Link>
			<div className="admin-student-buttons">
				<Link
					to={`/admin/students/${student.id}/edit`}
					className="admin-edit-button"
				>
					Modifier
				</Link>
				<Link
					to={`/admin/students/${student.id}/delete`}
					className="admin-delete-button"
				>
					Supprimer
				</Link>
			</div>

			{/* <div>
				<p>Nom : {student.nom}</p>
				<p>Prenom : {student.prenom}</p>
				<p>Classe : {student.classe}</p>
			</div> */}
		</div>
	);
};

export default AdminStudentItem;
