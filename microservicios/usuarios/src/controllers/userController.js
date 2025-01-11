const Usuario = require('../models/usuario');

// Crear un nuevo usuario
async function createUser(req, res) {
  const { dni, clave, nombre } = req.body;
  try {
    const usuario = await Usuario.createUser(dni, clave, nombre);
    res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: 'Error al crear el usuario', error });
  }
}

// Obtener todos los usuarios
async function getAllUsers(req, res) {
  try {
    const usuarios = await Usuario.getAllUsers();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: 'Error al obtener los usuarios', error });
  }
}

// Obtener un usuario por DNI
async function getUserByDni(req, res) {
  const { dni } = req.params;
  try {
    const usuario = await Usuario.getUserByDni(dni);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: 'Error al obtener el usuario', error });
  }
}

// Actualizar un usuario por DNI
async function updateUser(req, res) {
  const { dni } = req.params;
  const { clave, nombre } = req.body;
  try {
    const usuario = await Usuario.updateUser(dni, clave, nombre);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario actualizado', usuario });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: 'Error al actualizar el usuario', error });
  }
}

// Eliminar un usuario por DNI
async function deleteUser(req, res) {
  const { dni } = req.params;
  try {
    const usuario = await Usuario.deleteUser(dni);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: 'Error al eliminar el usuario', error });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserByDni,
  updateUser,
  deleteUser
};
