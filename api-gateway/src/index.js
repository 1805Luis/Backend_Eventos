const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3010;  // Puerto del API Gateway

app.get("/health", (req, res) => {
  res.status(200).send("API Gateway is up and running!");
});


// Proxy hacia microservicio de usuarios (PostgreSQL)
app.use('/api/usuarios', createProxyMiddleware({
  target: 'http://usuarios-microservicios:3002',  // Nombre del contenedor
  changeOrigin: true
}));

// Proxy hacia microservicio de eventos (MongoDB)
app.use('/api/eventos', createProxyMiddleware({
  target: 'http://eventos-microservicios:3001',  // Nombre del contenedor
  changeOrigin: true
}));

app.use('/api/reservas', createProxyMiddleware({
  target: 'http://reservas-microservicios:3003',  // Nombre del contenedor
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`API Gateway corriendo en el puerto ${port}`);
});
