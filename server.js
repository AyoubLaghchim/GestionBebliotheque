require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const { DefaultAzureCredential } = require("@azure/identity");

// Import routes
const booksRoutes = require('./routes/books');
const studentsRoutes = require('./routes/students');
const loansRoutes = require('./routes/loans');

const app = express();

// Database Connection
const connectDB = async () => {
  if (process.env.NODE_ENV === 'production') {
    // Azure Production Connection
    const credential = new DefaultAzureCredential();
    try {
      await mongoose.connect(process.env.COSMOS_DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
        authMechanism: 'MONGODB-OIDC',
        authSource: '$external',
        authMechanismProperties: {
          AZURE_IDENTITY: credential
        }
      });
      console.log('Connected to Cosmos DB with Managed Identity');
    } catch (err) {
      console.error('Cosmos DB Connection Error:', err);
      process.exit(1);
    }
  } else {
    // Local Development Connection
    try {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/library_system', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('MongoDB Connection Error:', err.message);
      process.exit(1);
    }
  }
};

connectDB();

// View Engine Setup
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
app.get('/', (req, res) => {
  res.render('index', { title: 'Library Management System' });
});

app.use('/books', booksRoutes);
app.use('/students', studentsRoutes);
app.use('/loans', loansRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));