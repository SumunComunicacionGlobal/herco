const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const generateRoutes = require('./src/routes/generateRoutes');

app.set("view engine", "ejs");
app.use(layouts);
app.set('layout', 'layouts/layout');

// Configurar archivos estáticos
app.use(express.static('public'));

// Generar rutas dinámicamente
generateRoutes(app);

//app.get("/", (req, res) => {
//  res.render("index", { pageTitle: "Suministros HERCO", robots: "all", bodyClass: "homepage" });
//});
//
//app.get("/aviso-legal", (req, res) => {
  //res.render("aviso-legal", { pageTitle: "Aviso Legal - Suministros HERCO", robots: "noindex, follow", bodyClass: "homepage" });
//});
//
//app.get("/marcas", (req, res) => {
  //res.render("marcas", { pageTitle: "Marcas - Suministros HERCO", robots: "noindex, noindex,follow", bodyClass: "brands" });
//});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});