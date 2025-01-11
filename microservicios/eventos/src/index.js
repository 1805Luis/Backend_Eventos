const express = require('express');
require('./database');
const port = 3001;

const app = express();

app.use(express.json());

app.use(require('./routes/eventoRoutes'));

app.listen(port, () => console.log(`Microservicio eventos activo en el puerto: ${port}`));
