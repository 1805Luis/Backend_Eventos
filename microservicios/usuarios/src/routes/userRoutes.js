const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserByDni,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Crear un nuevo usuario
router.post('/user', createUser);

// Obtener todos los usuarios
router.get('/user', getAllUsers);

// Obtener un usuario por DNI
router.get('/user/:dni', getUserByDni);

// Actualizar un usuario por DNI
router.put('/user/:dni', updateUser);

// Eliminar un usuario por DNI
router.delete('/user/:dni', deleteUser);

module.exports = router;
