const express = require('express');
const router = express.Router();

// post запрос
router.post('/hello', (req, res) => {
    const { name } = req.body;
    res.send(`Hi, ${name}!`);
});
  
router.get('/hello', (req, res) => {
    res.send(`Hello!`);
});

module.exports = router;