const express = require('express');
const router = express.Router();

let tasks = [
    { id: 1, title: 'Изучить Express'},
    { id: 2, title: 'Сделать CRUD для tasks'}
];

//CRUD - Create, Read, Update, Delete
//Read - GET
router.get('/', (req, res) => {
    res.json({
        message: 'All tasks',
        data: tasks
    });
});
//Create - POST
router.post('/', (req,res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: 'Error - title is empty!'
        })
    }

    const newTask = {
        id: Date.now(),
        title
    }

    tasks.push(newTask);

    res.status(201).json({
        message: 'Tasks created!',
        data: newTask
    });
});

module.exports = router;