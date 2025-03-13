const fs = require('fs');
const path = require('path');

// Función para generar variables de la página
const generatePageData = (viewName) => {
  const pageData = {
    index: {
      pageTitle: 'Suministros Herco',
      bodyClass: 'homepage',
      robots: 'all'
    },
    brands: {
      pageTitle: 'Marcas - Suministros Herco',
      bodyClass: 'brands',
      robots: 'all'
    },
    search: {
      pageTitle: 'Buscar por - Suministros Herco',
      bodyClass: 'page-search',
      robots: 'noindex,follow'
    }
    // Agrega más vistas aquí según sea necesario
  };

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
        res.render(viewName, generatePageData(viewName));
      });
    }
  });
};

module.exports = generateRoutes;