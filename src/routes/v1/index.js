const express = require('express');
const router = express.Router();
const TaskController = require('../../controllers/task-controller');


// for task
router.post(
    '/tasks',
    TaskController.create
);
router.delete('/tasks/:id', TaskController.destroy);
router.patch('/tasks/:id', TaskController.update);
router.get('/tasks/:id',TaskController.get);

module.exports = router;