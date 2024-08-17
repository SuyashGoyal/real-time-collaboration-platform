// src/controllers/documentController.js
const Document = require('../models/Document');

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDocument = async (req, res) => {
  const { title, content } = req.body;
  const newDocument = new Document({ title, content });
  try {
    const savedDocument = await newDocument.save();
    res.status(201).json(savedDocument);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) return res.status(404).json({ message: 'Document not found' });
    res.json(document);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const updatedDocument = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDocument) return res.status(404).json({ message: 'Document not found' });
    res.json(updatedDocument);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    if (!deletedDocument) return res.status(404).json({ message: 'Document not found' });
    res.json({ message: 'Document deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
