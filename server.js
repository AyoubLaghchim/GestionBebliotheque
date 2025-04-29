require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Connexion à MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connecté à MongoDB Atlas');
  } catch (err) {
    console.error('❌ Erreur de connexion MongoDB Atlas:', err.message);
    process.exit(1);
  }
};

connectDB();

// Configuration du moteur de vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const booksRoutes = require('./routes/books');
const studentsRoutes = require('./routes/students');
const loansRoutes = require('./routes/loans');

app.get('/', (req, res) => {
  res.render('index', { title: 'Library Management System' });
});

app.use('/books', booksRoutes);
app.use('/students', studentsRoutes);
app.use('/loans', loansRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
// Dernière modification le 29/04/2025 16:00