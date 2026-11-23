const express = require('express');
const router = express.Router();
const { createMedia, getMedia, updateMedia, deleteMedia } = require('../controllers/mediaController');

router.post('/', createMedia);
router.get('/', getMedia);
router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

module.exports = router;
