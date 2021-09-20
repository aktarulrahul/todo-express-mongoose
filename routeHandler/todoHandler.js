const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');
const router = express.Router();

// Create todo model
const Todo = new mongoose.model('Todo', todoSchema);

// GET All The todos
router.get('/', async (req, res) => {});
// GET single todo
router.get('/:id', async (req, res) => {});
// POST todo
router.post('/', async (req, res) => {});
// POST multiple todo
router.post('/all', async (req, res) => {});
// PUT todo
router.put('/:id', async (req, res) => {});
// Delete todo
router.delete('/:id', async (req, res) => {});

module.exports = router;
