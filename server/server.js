// server/server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Ajoutez des middleware de route personnalisés ici si nécessaire

server.use("/admin/students", (req, res, next) => {
	// Vérifiez ici si l'utilisateur a les droits d'administration
	// (peut-être en fonction de son rôle ou d'une authentification spécifique)
	// Si l'utilisateur n'est pas autorisé, vous pouvez renvoyer une réponse 403 Forbidden
	// Sinon, continuez avec la gestion normale de json-server
	next();
});

server.use("/user/students", (req, res, next) => {
	// Ajoutez des vérifications d'autorisations pour les utilisateurs ici si nécessaire
	// Si l'utilisateur n'est pas autorisé, vous pouvez renvoyer une réponse 403 Forbidden
	// Sinon, continuez avec la gestion normale de json-server
	next();
});

server.use(router);

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
