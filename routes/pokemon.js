var express = require('express');
var router = express.Router();
const axios = require('axios');
const {
    seleccionarEquipo
} = require('../controllers/pokemon.controller');

/* GET users listing. */
router.get('/select-pokes', seleccionarEquipo);

module.exports = router;