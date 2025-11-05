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

// Función recursiva para encontrar todas las vistas .ejs (incluyendo subcarpetas)
function findViews(dir, prefix = '') {
  let views = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      views = views.concat(findViews(fullPath, prefix + file + '/'));
    } else if (
      file.endsWith('.ejs') &&
      !file.startsWith('_') &&
      file !== 'layout.ejs'
    ) {
      views.push(prefix + file.replace('.ejs', ''));
    }
  });

  return views;
}

// Función para generar rutas dinámicamente
const generateRoutes = (router) => {
  const viewsDir = path.join(__dirname, '../../views');
  const views = findViews(viewsDir);

  views.forEach(viewName => {
    const routePath = viewName === 'index' ? '/' : `/${viewName}`;
    router.get(routePath, (req, res) => {
      const data = generatePageData(viewName);
      data.breadcrumbUrl = `https://suministrosherco.com/${viewName === 'index' ? '' : viewName}`;

      res.render(viewName, data);
    });
  });
};

module.exports = generateRoutes;