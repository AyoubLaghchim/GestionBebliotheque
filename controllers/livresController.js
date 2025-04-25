const Livre = require('../models/livres');

exports.getAll = (req, res) => res.json(Livre.getAll());
exports.getById = (req, res) => res.json(Livre.getById(req.params.id));
exports.create = (req, res) => res.status(201).json(Livre.create(req.body));
exports.update = (req, res) => res.json(Livre.update(req.params.id, req.body));
exports.delete = (req, res) => {
    Livre.delete(req.params.id);
    res.sendStatus(204);
};
