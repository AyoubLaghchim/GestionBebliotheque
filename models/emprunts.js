let emprunts = [];
let id = 1;

module.exports = {
    getAll: () => emprunts,
    getById: id => emprunts.find(e => e.id === parseInt(id)),
    create: data => {
        const newE = { id: id++, dateRetour: null, ...data };
        emprunts.push(newE);
        return newE;
    },
    retour: idVal => {
        const emprunt = emprunts.find(e => e.id === parseInt(idVal));
        if (emprunt) {
            emprunt.dateRetour = new Date();
            return emprunt;
        }
        return null;
    },
    delete: idVal => {
        emprunts = emprunts.filter(e => e.id !== parseInt(idVal));
    }
};
