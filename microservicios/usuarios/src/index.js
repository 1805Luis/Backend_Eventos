const express = require('express');
const pool = require('./database');
const port = 3002;

const app = express();

app.use(express.json());

app.use(require('./routes/userRoutes'));

app.listen(port, () => {  console.log(`Microservicio usuario activo en el puerto: ${port}`);});
