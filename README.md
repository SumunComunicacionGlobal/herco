

Suministros Herco Ecommerce
===

Este proyecto es un ecommerce para la empresa Suministros Herco, especializado en la venta de suministros industriales. El desarrollo está realizado en Node.js usando Express, EJS para plantillas, y una arquitectura modular y escalable.

* Node.js y Express: Backend y servidor web.
* EJS: Motor de plantillas para renderizado dinámico del HTML.
* SASS (SCSS): Preprocesador CSS para estilos avanzados.
* jQuery: Utilizado para la interacción en el frontend.
* Swiper.js: Carruseles y sliders.
* Font customizada: Iconos propios de Herco.
* Arquitectura modular: Separación clara entre vistas, rutas, scripts y estilos.


Installation
---------------

### Requirements

`larra` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/) Just for Hybrid Themes


### Setup

To start using all the tools that come with `larra`  you need to install the necessary Node.js and Composer dependencies :

```sh
$ npm install
```

### Available CLI commands

`larra` comes packed with CLI commands tailored for WordPress theme development :

- `composer lint:wpcs` : checks all PHP files against [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- `composer lint:php` : checks all PHP files for syntax errors.
- `npm run compile:css` : compiles SASS files to css.
- `npm run compile:js` : compiles JS files to min.js.
- `npm run watch` : watches all SASS files and recompiles them to css when they change.
- `npm run bundle` : generates a .zip archive for distribution, excluding development and system files.
- `npm run sync` : Browser syncs listen all files. Maybe you have to change the port. By default: `localhost:8888/larra/`.
- `npm run dev` : Run watch and sync to develop your awesome theme.


#### Settings

1. Configura las paletas de color, mejor si solo cambias el hexadecimal, en caso de que necesites más colores sigue la nomenclatura, `primary-20` o `secondary-90`por ejemplo.
2. Personaliza el `border-radius`, `box-shadow`, paleta de color de grises (solo cambia el hexadecimal), `layout`y lo que consideres necesario.
4. Search for `larra` (in uppercase) to capture constants and replace with: `Nombre_proyecto`.
5. Search in package.json for `sumun` to to change the theme name: `project-name`.
6. Optionally, search for `smn_` to capture all the functions names and replace with: `project_name_`.


Estructura del proyecto
---------------

#### Estructura

herco/
│
├── app.js
├── package.json
├── public/
│   ├── css/
│   ├── font/
│   ├── img/
│   ├── js/
│   └── svg/
├── src/
│   ├── js/
│   ├── routes/
│   └── sass/
└── views/
    ├── layouts/
    ├── partials/
    │   ├── components/
    │   └── sections/
    └── *.ejs

#### Detalles

* /public: Archivos estáticos (CSS, JS minificado, fuentes, imágenes, SVG).
* /src/js: Scripts JavaScript de la aplicación (no minificados).
* /src/sass: Estilos SCSS organizados por componentes y utilidades.
* /src/routes: Rutas y lógica de generación de datos para las vistas.
* /views: Plantillas EJS.
* /layouts: Plantillas base (estructura HTML principal).
* /partials/components: Componentes reutilizables (breadcrumbs, header-bar, cards, etc).
* /partials/sections: Secciones de página (hero, promos, brands, etc).
* /*.ejs: Vistas principales (index, category, product, etc).

#### ¿Qué hace cada carpeta de src?

**/src/routes:**
* generateRoutes.js: Genera rutas dinámicas para cada vista EJS.
* main.routers.js: (Si existe) Rutas adicionales o personalizadas.
* pageData.js: Datos y metadatos para cada página (título, robots, etc).

**/src/js:**
+ Scripts de interacción y lógica de frontend.

/src/sass:
Estilos SCSS organizados en:

core: Variables, mixins, helpers.
components: Estilos de componentes (botones, navegación, etc).
pages: Estilos específicos de páginas.