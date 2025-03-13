const express = require('express');
const router = express.Router();
const generateRoutes = require('./generateRoutes');

// Generar rutas dinámicamente
generateRoutes(router);

module.exports = router;