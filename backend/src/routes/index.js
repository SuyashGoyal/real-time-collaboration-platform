// src/routes/index.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.get('/documents', documentController.getDocuments);
router.post('/documents', documentController.createDocument);
router.get('/documents/:id', documentController.getDocument);
router.put('/documents/:id', documentController.updateDocument);
router.delete('/documents/:id', documentController.deleteDocument);

module.exports = router;
