const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Directorios
const viewsDir = path.join(__dirname, 'views');
const distDir = path.join(__dirname, 'dist');
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

// Renderizar cada página con el layout
pages.forEach(({ template, output }) => {
  const templatePath = path.join(viewsDir, template);

  // Renderizar la vista primero
  ejs.renderFile(templatePath, {}, {}, (err, content) => {
    if (err) {
      console.error(`Error renderizando ${template}:`, err);
      return;
    }

    // Luego, inyectar la vista en el layout
    ejs.renderFile(layoutPath, { body: content }, {}, (err, fullPage) => {
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

console.log('🚀 Todas las páginas han sido generadas en /dist/');
