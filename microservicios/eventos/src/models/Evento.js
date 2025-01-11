const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  type: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  precio: { type: Number, required: true }
});

const EventoSchema = new mongoose.Schema({
  id: {type: String, require: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  seats: { type: Number, required: true },
  categories: [CategoriaSchema]
});

module.exports = mongoose.model('Evento', EventoSchema);
