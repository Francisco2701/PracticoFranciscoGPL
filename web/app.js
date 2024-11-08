const express = require('express');
const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas y servir archivos estáticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Datos de ejemplo para las entradas del blog
const blogPosts = [
  { title: "Los Clásicos de Mayor Venta", image: "image1.jpg", description: "Breve descripción de la entrada 1" },
  { title: "Juegos Retro Inolvidables", image: "image2.jpg", description: "Breve descripción de la entrada 2" },
  { title: "Las Máquinas Arcade", image: "image3.jpg", description: "Breve descripción de la entrada 3" },
  { title: "Emuladores de Consolas Retro", image: "image4.jpg", description: "Breve descripción de la entrada 4" },
  { title: "Historia de los Videojuegos", image: "image5.jpg", description: "Breve descripción de la entrada 5" },
  { title: "Las Mejores Sagas de los 90", image: "image6.jpg", description: "Breve descripción de la entrada 6" },
  { title: "Consolas Portátiles Retro", image: "image7.jpg", description: "Breve descripción de la entrada 7" },
  { title: "Cómo Crear Tu Consola Retro", image: "image8.jpg", description: "Breve descripción de la entrada 8" }
];

// Ruta para la página principal
app.get('/', (req, res) => {
  res.render('index', { blogPosts });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
