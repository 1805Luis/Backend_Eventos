const Evento = require('../models/Evento');
const { v4: uuidv4 } = require('uuid');

// Crear un nuevo evento
async function crearEvento(req, res) {
  try {
    if (!req.body.id) {
      req.body.id = uuidv4();
    }
    const nuevoEvento = new Evento(req.body);
    await nuevoEvento.save();
    res.status(201).json({ mensaje: 'Evento creado', evento: nuevoEvento });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el evento', error });
  }
}

// Obtener todos los eventos
async function obtenerEventos(req, res) {
  try {
    const eventos = await Evento.find();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los eventos', error });
  }
}

// Obtener un evento por ID
async function obtenerEventoPorId(req, res) {
  try {
    const evento = await Evento.findOne({ id: req.params.id });
    if (!evento) return res.status(404).json({ mensaje: 'Evento no encontrado' });
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar el evento', error });
  }
}

// Actualizar un evento por ID
async function actualizarEvento(req, res) {
  try {
    const eventoOriginal = await Evento.findOne({ id: req.params.id });

    if (!eventoOriginal) {
      return res.status(404).json({ mensaje: 'Evento no encontrado' });
    }

    const { id, ...restoDeDatos } = req.body;

    const eventoActualizado = await Evento.findOneAndUpdate(
      { id: req.params.id },
      { ...restoDeDatos, id: eventoOriginal.id },
      { new: true }
    );

    res.status(200).json({ mensaje: 'Evento actualizado', evento: eventoActualizado });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el evento', error });
  }
}

// Eliminar un evento por ID
async function eliminarEvento(req, res) {
  try {
    const eventoEliminado = await Evento.findOneAndDelete({ id: req.params.id });
    if (!eventoEliminado) return res.status(404).json({ mensaje: 'Evento no encontrado' });
    res.status(200).json({ mensaje: 'Evento eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el evento', error });
  }
}

module.exports = {
  crearEvento,
  obtenerEventos,
  obtenerEventoPorId,
  actualizarEvento,
  eliminarEvento
};
