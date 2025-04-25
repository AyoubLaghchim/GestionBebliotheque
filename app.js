const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Import des routes
const etudiantsRoutes = require('./routes/etudiants');

// Utilisation des routes
app.use('/api/etudiants', etudiantsRoutes);

// Route d'accueil par défaut
app.get('/', (req, res) => {
  res.send('Bienvenue dans l’API de gestion de bibliothèque 📚');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
