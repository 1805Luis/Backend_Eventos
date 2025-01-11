// models/reservasModel.js
const pool = require('../database');

class Reserva {
    constructor(id, id_evento, id_usuario, entradas, fecha) {
        this.id = id || null;
        this.id_evento = id_evento;
        this.id_usuario = id_usuario;
        this.entradas = entradas;
        this.fecha = fecha || new Date();  // Fecha predeterminada a la fecha actual
    }

    // Método para guardar la reserva en la base de datos (insertar)
    async save() {
        const conn = await pool.getConnection();
        const query = 'INSERT INTO reservas (id_evento, id_usuario, entradas, fecha) VALUES (?, ?, ?, ?)';
        const result = await conn.query(query, [this.id_evento, this.id_usuario, this.entradas, this.fecha]);
        this.id = result.insertId; // Almacena el id recién creado
        conn.release();
        return this;
    }

    // Método para actualizar una reserva existente
    async update() {
        const conn = await pool.getConnection();
        const query = 'UPDATE reservas SET id_evento = ?, id_usuario = ?, entradas = ?, fecha = ? WHERE id = ?';
        const result = await conn.query(query, [this.id_evento, this.id_usuario, this.entradas, this.fecha, this.id]);
        conn.release();
        return result;
    }

    // Método para eliminar una reserva
    async delete() {
        const conn = await pool.getConnection();
        const query = 'DELETE FROM reservas WHERE id = ?';
        const result = await conn.query(query, [this.id]);
        conn.release();
        return result;
    }

    // Método estático para obtener todas las reservas
    static async getAll() {
        const conn = await pool.getConnection();
        const query = 'SELECT * FROM reservas';
        const rows = await conn.query(query);
        conn.release();
        return rows.map(row => new Reserva(row.id, row.id_evento, row.id_usuario, row.entradas, row.fecha));
    }

    // Método estático para obtener una reserva por id
    static async getById(id) {
        const conn = await pool.getConnection();
        const query = 'SELECT * FROM reservas WHERE id = ?';
        const rows = await conn.query(query, [id]);
        conn.release();
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Reserva(row.id, row.id_evento, row.id_usuario, row.entradas, row.fecha);
    }
}

module.exports = Reserva;
