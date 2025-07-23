const express = require('express');
const router = express.Router();

let columns = [
    { id: 1, title: 'Backlog' },
    { id: 2, title: 'To Do' },
    { id: 3, title: 'Doing' }
];

//Read - GET
router.get('/', (req, res) => {
    res.json({
        message: 'All tasks',
        data: columns
    });
});

//Creat - POST
router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title){
        return res.status(400).json({
            message: 'Error - title of column is empty'
        })
    }
    const newColumn = {
        id: Date.now(),
        title: title
    }

    columns.push(newColumn);

    res.status(201).json({
        message: 'New column created',
        data: newColumn
    })
});

module.exports = router;