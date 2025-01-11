// routes/eventoRoutes.js
const express = require('express');
const reservasController = require('../controllers/reservasController');
const router = express.Router();

// Obtener todas las reservas
router.get('/reservas', reservasController.getAllReservas);

// Obtener una reserva por ID
router.get('/reservas/:id', reservasController.getReservaById);

// Crear una nueva reserva
router.post('/reservas', reservasController.createReserva);

// Actualizar una reserva
router.put('/reservas/:id', reservasController.updateReserva);

// Eliminar una reserva
router.delete('/reservas/:id', reservasController.deleteReserva);

module.exports = router;
