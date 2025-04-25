let etudiants = [];
let id = 1;

module.exports = {
    getAll: () => etudiants,
    getById: id => etudiants.find(e => e.id === parseInt(id)),
    create: data => {
        const newE = { id: id++, ...data };
        etudiants.push(newE);
        return newE;
    },
    update: (idVal, data) => {
        const index = etudiants.findIndex(e => e.id === parseInt(idVal));
        if (index !== -1) {
            etudiants[index] = { ...etudiants[index], ...data };
            return etudiants[index];
        }
        return null;
    },
    delete: idVal => {
        etudiants = etudiants.filter(e => e.id !== parseInt(idVal));
    }
};
