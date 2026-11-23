const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  nombre_video: { type: String, required: true },
  categoria: { type: String, required: true },
  duracion_seg: { type: Number, required: true },
  tamano_mb: { type: Number, required: true }
});

module.exports = mongoose.model('Media', mediaSchema);