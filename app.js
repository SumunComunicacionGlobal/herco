const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(layouts);
app.set('layout', 'layouts/layout');

// Configurar archivos estáticos
app.use(express.static('public'));

// Rutas
const mainRouter = require('./src/routes/main.routers');
app.use('/', mainRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});