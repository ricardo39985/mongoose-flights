var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);
router.post('/flights/:flightId/tickets', ticketsCtrl.create);
router.delete('/tickets/:id', ticketsCtrl.delete)
module.exports=router
