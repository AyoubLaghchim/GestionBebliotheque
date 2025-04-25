// const Etudiant = require('../models/etudiants');

// exports.getAll = (req, res) => res.json(Etudiant.getAll());
// exports.getById = (req, res) => res.json(Etudiant.getById(req.params.id));
// exports.create = (req, res) => res.status(201).json(Etudiant.create(req.body));
// exports.update = (req, res) => res.json(Etudiant.update(req.params.id, req.body));
// exports.delete = (req, res) => {
//     Etudiant.delete(req.params.id);
//     res.sendStatus(204);
// };

exports.getAll = (req, res) => res.send("Liste des étudiants");
exports.getById = (req, res) => res.send("Détail de l'étudiant " + req.params.id);
exports.create = (req, res) => res.send("Ajout d'un étudiant");
exports.update = (req, res) => res.send("Mise à jour de l'étudiant " + req.params.id);
exports.delete = (req, res) => res.send("Suppression de l'étudiant " + req.params.id);
