const Emprunt = require('../models/emprunts');

exports.getAll = (req, res) => res.json(Emprunt.getAll());
exports.getById = (req, res) => res.json(Emprunt.getById(req.params.id));
exports.create = (req, res) => res.status(201).json(Emprunt.create(req.body));
exports.retour = (req, res) => {
    const result = Emprunt.retour(req.params.id);
    if (result) res.json(result);
    else res.status(404).json({ message: "Emprunt non trouvé" });
};
exports.delete = (req, res) => {
    Emprunt.delete(req.params.id);
    res.sendStatus(204);
};
