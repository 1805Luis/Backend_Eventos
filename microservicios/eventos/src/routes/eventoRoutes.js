const { Router } = require('express');
const router = Router();
const {
  crearEvento,
  obtenerEventos,
  obtenerEventoPorId,
  actualizarEvento,
  eliminarEvento
} = require('../controllers/eventoController');

// Rutas CRUD para eventos
router.post('/eventos', crearEvento);          // Crear evento
router.get('/eventos', obtenerEventos);        // Obtener todos los eventos
router.get('/eventos/:id', obtenerEventoPorId); // Obtener evento por ID
router.put('/eventos/:id', actualizarEvento);   // Actualizar evento por ID
router.delete('/eventos/:id', eliminarEvento);  // Eliminar evento por ID

module.exports = router;
