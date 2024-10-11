var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {
  jugar,
  regresarPartida,
  verHistorial,
  validarSesion
} = require('../controllers/game.controller');

router.post('/jugar', validarSesion, jugar);

router.get('/regresar-partida', regresarPartida);

router.get('/ver-historial', validarSesion, verHistorial);

module.exports = router;