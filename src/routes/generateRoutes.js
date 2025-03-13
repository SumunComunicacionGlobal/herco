const fs = require('fs');
const path = require('path');
const pageData = require('./pageData');

// Función para generar variables de la página
const generatePageData = (viewName) => {
  return pageData[viewName] || {
    pageTitle: 'Suministros Herco',
    bodyClass: '',
    robots: 'all'
  };
};

// Función para detectar las vistas y generar rutas
const generateRoutes = (router) => {
  const viewsDir = path.join(__dirname, '../../views');
  const files = fs.readdirSync(viewsDir);

  files.forEach(file => {
    if (file.endsWith('.ejs') && !file.startsWith('_') && file !== 'layout.ejs') {
      const viewName = file.replace('.ejs', '');
      const routePath = viewName === 'index' ? '/' : `/${viewName}`;

      router.get(routePath, (req, res) => {
        const data = generatePageData(viewName);
        res.render(viewName, data);
      });
    }
  });
};

module.exports = generateRoutes;