const { Pool } = require('pg');
const pool = require('../database');

const Usuario = {
  // Crear un nuevo usuario
  async createUser(dni, clave, nombre) {
    const result = await pool.query('INSERT INTO usuarios(dni, clave, nombre) VALUES ($1, $2, $3) RETURNING *', [dni, clave, nombre]);
    return result.rows[0];
  },

  // Obtener todos los usuarios
  async getAllUsers() {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
  },

  // Obtener un usuario por DNI
  async getUserByDni(dni) {
    const result = await pool.query('SELECT * FROM usuarios WHERE dni = $1', [dni]);
    return result.rows[0];
  },

  // Actualizar un usuario por DNI
  async updateUser(dni, clave, nombre) {
    const result = await pool.query('UPDATE usuarios SET clave = $1, nombre = $2 WHERE dni = $3 RETURNING *', [clave, nombre, dni]);
    return result.rows[0];
  },

  // Eliminar un usuario por DNI
  async deleteUser(dni) {
    const result = await pool.query('DELETE FROM usuarios WHERE dni = $1 RETURNING *', [dni]);
    return result.rows[0];
  }
};

module.exports = Usuario;
