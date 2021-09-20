const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');

// Create todo model
const Todo = new mongoose.model('Todo', todoSchema);

// GET All The todos
router.get('/', async (req, res) => {});
// GET single todo
router.get('/:id', async (req, res) => {});
// POST todo
router.post('/', async (req, res) => {
  const newTodo = new Todo(req.body);
  // console.log('req.body', req.body);
  await newTodo.save((err) => {
    // console.log(err);
    if (err) {
      res.status(500).json({
        error: 'There was a server side error!',
      });
    } else {
      res.status(200).json({
        message: 'Todo was inserted successfully',
      });
    }
  });
});
// POST multiple todo
router.post('/all', async (req, res) => {});
// PUT todo
router.put('/:id', async (req, res) => {});
// Delete todo
router.delete('/:id', async (req, res) => {});

module.exports = router;
