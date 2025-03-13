const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const pageData = require('./src/routes/pageData');

// Directorios
const viewsDir = path.join(__dirname, 'views');
const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');
const layoutPath = path.join(viewsDir, 'layouts', 'layout.ejs'); // Ruta del layout

// Asegurar que la carpeta dist existe
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Obtener todas las plantillas EJS (excluyendo partials, layout y archivos no ejs)
const getTemplates = (dir) => {
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.ejs') && !file.startsWith('_') && file !== 'layout.ejs')
    .map(file => ({ template: file, output: file.replace('.ejs', '.html') }));
};

// Obtener las vistas principales (no partials)
const pages = getTemplates(viewsDir);

// Función para generar variables de la página
const generatePageData = (viewName) => {
  return pageData[viewName] || {
    pageTitle: 'Suministros Herco',
    bodyClass: '',
    robots: 'all'
  };
};

// Renderizar cada página con el layout
pages.forEach(({ template, output }) => {
  const templatePath = path.join(viewsDir, template);
  const viewName = template.replace('.ejs', '');
  const data = generatePageData(viewName);

  // Renderizar la vista primero
  ejs.renderFile(templatePath, data, {}, (err, content) => {
    if (err) {
      console.error(`Error renderizando ${template}:`, err);
      return;
    }

    // Luego, inyectar la vista en el layout
    ejs.renderFile(layoutPath, { ...data, body: content }, {}, (err, fullPage) => {
      if (err) {
        console.error(`Error renderizando el layout para ${template}:`, err);
        return;
      }

      // Guardar en dist/
      const outputPath = path.join(distDir, output);
      fs.writeFileSync(outputPath, fullPage);
      console.log(`✅ Página generada: ${outputPath}`);
    });
  });
});

// Copiar el contenido de la carpeta public a la raíz de dist
fs.readdir(publicDir, (err, files) => {
  if (err) {
    console.error('Error leyendo la carpeta public:', err);
    return;
  }

  files.forEach(file => {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(distDir, file);

    fs.copy(srcPath, destPath, err => {
      if (err) {
        console.error(`Error copiando ${file} a dist:`, err);
        return;
      }
      console.log(`✅ ${file} copiado a dist`);
    });
  });
});

console.log('🚀 Todas las páginas han sido generadas en /dist/');