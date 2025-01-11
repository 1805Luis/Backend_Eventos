// src/index.js
const express = require('express');
const pool = require('./database');
const port = 3003;

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Rutas de reservas
app.use(require('./routes/eventosRoutes'));

app.listen(port, () => {
    console.log(`Microservicio reservas activo en el puerto: ${port}`);
});
