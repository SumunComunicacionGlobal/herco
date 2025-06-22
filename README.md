

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


Instalación
---------------

### Requirements

`herco` requires the following dependencies:

- [Node.js](https://nodejs.org/) versión recomendada: 18.x o superior
- [npm](https://www.npmjs.com/) gestor de paquetes de Node.js


### Setup

Clona el repositorio

```sh
git clone https://github.com/SumunComunicacionGlobal/herco.git
cd herco
```

Instala las dependencias

```sh
npm install
```

Arranca el servidor en modo desarrollo:

```sh
npm run dev
```

Esto lanzará en paralelo:

* El servidor Express con recarga automática (nodemon)
* La compilación y recarga de los estilos SASS
* La compilación y recarga de los scripts JS
El sitio estará disponible en http://localhost:3001 (o el puerto que indiques en app.js).

### Comandos CLI disponibles

`hero` comes packed with CLI commands tailored for WordPress theme development :

- `npm run dev` : Ejecuta el entorno de desarrollo completo (servidor, SASS y JS en modo watch).
- `npm run watch:nodemon` : Solo lanza el servidor Express con recarga automática.
- `npm run watch:sass` : Compila los archivos SASS/SCSS y observa cambios para recargar el CSS automáticamente.
- `npm run watch:js` : Observa los archivos JS en js y ejecuta la tarea de minificación cuando haya cambios.
- `npm run compile:js` : Minifica todos los archivos JS de js en un único archivo herco.min.js.


Notas :
* Los archivos estáticos (CSS, JS minificado, imágenes, fuentes) se sirven desde la carpeta public.
* El código fuente de los estilos y scripts originales está en sass y js.
* Las vistas EJS están en la carpeta views. 


Estructura del proyecto
---------------

#### Estructura

''' sh
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
'''


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