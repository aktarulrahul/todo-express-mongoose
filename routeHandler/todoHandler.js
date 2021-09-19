const express = require('express');
const router = express.Router();

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
