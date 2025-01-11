// controllers/reservasController.js
const Reserva = require('../models/reservasModel');

// Obtener todas las reservas
const getAllReservas = async (req, res) => {
    try {
        const reservas = await Reserva.getAll();
        res.status(200).json(reservas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener reservas' });
    }
};

// Obtener una reserva por ID
const getReservaById = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.getById(id);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.status(200).json(reserva);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener la reserva' });
    }
};

// Crear una nueva reserva
const createReserva = async (req, res) => {
    const { id_evento, id_usuario, entradas } = req.body;
    try {
        const nuevaReserva = new Reserva(null, id_evento, id_usuario, entradas);
        await nuevaReserva.save();
        res.status(201).json({ message: 'Reserva creada', id: nuevaReserva.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear la reserva' });
    }
};

// Actualizar una reserva
const updateReserva = async (req, res) => {
    const { id } = req.params;
    const { id_evento, id_usuario, entradas } = req.body;
    try {
        const reserva = await Reserva.getById(id);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        reserva.id_evento = id_evento;
        reserva.id_usuario = id_usuario;
        reserva.entradas = entradas;
        await reserva.update();
        res.status(200).json({ message: 'Reserva actualizada' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar la reserva' });
    }
};

// Eliminar una reserva
const deleteReserva = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.getById(id);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        await reserva.delete();
        res.status(200).json({ message: 'Reserva eliminada' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar la reserva' });
    }
};

module.exports = {
    getAllReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva
};
