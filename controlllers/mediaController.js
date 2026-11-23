const Media = require('../models/Media');

const createMedia = async (req, res) => {
  try {
    const nuevoRecurso = new Media(req.body);
    const guardado = await nuevoRecurso.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMedia = async (req, res) => {
  try {
    const recursos = await Media.find();
    res.status(200).json(recursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMedia = async (req, res) => {
  try {
    const actualizado = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!actualizado) return res.status(404).json({ error: 'Recurso no encontrado' });
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const eliminado = await Media.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Recurso no encontrado' });
    res.status(200).json({ mensaje: 'Recurso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// EXPORTACIÓN OBLIGATORIA
module.exports = {
  createMedia,
  getMedia,
  updateMedia,
  deleteMedia
};