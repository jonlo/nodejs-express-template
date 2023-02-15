const express = require('express');
const { Controller } = require('../controllers/controller');
const { validationRules, validate } = require('../middlewares/validator');

const controller = new Controller();

let app = express();

app.get('/status', (req, res) => {
    res.status(200).send();
});

app.put('/elements', validationRules(), validate, (req, res) => {
    try {
        controller.setElements(req.body);
        res.status(200).send();
        return;
    } catch (err) {
        res.status(400).send();
        return;
    }
});


module.exports = app;