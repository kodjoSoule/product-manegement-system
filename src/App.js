import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/shared/Home";
import UserStudentList from "./components/user/StudentList";
import UserStudentDetail from "./components/user/StudentDetail";

import AdminStudentList from "./components/admin/AdminStudentList";
import AdminStudentDetail from "./components/admin/AdminStudentDetail";
import AdminStudentForm from "./components/admin/AdminStudentForm";
import Header from "./components/shared/Header";
function App() {
	return (
		<BrowserRouter>
			<div>
				{" "}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/home" element={<Home />} />

					{/* Routes pour les utilisateurs */}
					<Route path="/students" element={<UserStudentList />} />
					<Route path="/students/:studentId" element={<UserStudentDetail />} />
					{/* Routes pour les administrateurs */}
					<Route path="/admin/students" element={<AdminStudentList />} />
					<Route
						path="/admin/students/:studentId"
						element={<AdminStudentDetail />}
					/>
					<Route path="/admin/add-student" element={<AdminStudentForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
