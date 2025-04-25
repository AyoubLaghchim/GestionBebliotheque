let livres = [];
let id = 1;

module.exports = {
    getAll: () => livres,
    getById: id => livres.find(l => l.id === parseInt(id)),
    create: data => {
        const newL = { id: id++, ...data };
        livres.push(newL);
        return newL;
    },
    update: (idVal, data) => {
        const index = livres.findIndex(l => l.id === parseInt(idVal));
        if (index !== -1) {
            livres[index] = { ...livres[index], ...data };
            return livres[index];
        }
        return null;
    },
    delete: idVal => {
        livres = livres.filter(l => l.id !== parseInt(idVal));
    }
};
