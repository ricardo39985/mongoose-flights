var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/edit', flightsCtrl.index);
router.post('/', flightsCtrl.create);
router.delete('/:id', flightsCtrl.index);





module.exports = router;
