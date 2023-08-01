// Importa los módulos necesarios
const express = require('express');
const fs = require('fs');
const path = require('path');

// Crea una nueva aplicación Express
const app = express();

// Configura una ruta para servir tu archivo assetlinks.json
app.get('/well-known/assetlinks.json', function(req, res) {
  const filePath = path.join(__dirname, 'well-known', 'assetlinks.json');
  const fileContents = fs.readFileSync(filePath);
  const json = JSON.parse(fileContents);
  
  // Configura el header 'Content-Type' a 'application/json'
  res.setHeader('Content-Type', 'application/json');
  
  // Envía el contenido del archivo JSON como respuesta
  res.status(200).send(json);
});

// Inicia el servidor
app.listen(process.env.PORT || 3000);
