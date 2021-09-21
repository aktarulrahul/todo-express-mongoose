const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');

// Create todo model
const Todo = new mongoose.model('Todo', todoSchema);

// GET All The todos
router.get('/', (req, res) => {
  Todo.find({ status: 'active' })
    .select({
      _id: 0,
      __v: 0,
      date: 0,
    })
    .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: 'There was a server side error!',
        });
      } else {
        res.status(200).json({
          result: data,
          message: 'Success',
        });
      }
    });
});
// GET single todo
router.get('/:id', async (req, res) => {
  try {
    const data = await Todo.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: 'Success',
    });
  } catch {
    res.status(500).json({
      error: 'There was a server side error!',
    });
  }
});
// POST todo
router.post('/', (req, res) => {
  const newTodo = new Todo(req.body);
  // console.log('req.body', req.body);
  newTodo.save((err) => {
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
router.post('/all', (req, res) => {
  Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error!',
      });
    } else {
      res.status(200).json({
        message: 'Todos were inserted successfully',
      });
    }
  });
});
// PUT todo
router.put('/:id', (req, res) => {
  const result = Todo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: 'active',
      },
    },
    {
      new: true,
    },
    (err) => {
      // console.log('inside findByIdAndUpdate err ');
      // console.log(err);
      if (err) {
        res.status(500).json({
          error: 'There was a server side error!',
        });
      } else {
        // console.log('inside findByIdAndUpdate else ');
        res.status(200).json({
          message: 'Todo was updated successfully',
        });
      }
    }
  );
  console.log('result', result);
});
// Delete todo
router.delete('/:id', (req, res) => {
  Todo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error!',
      });
    } else {
      res.status(200).json({
        message: 'Todo was deleted successfully',
      });
    }
  });
});

module.exports = router;
