const destination = require('../models/destination');
const Flight = require('../models/flight');
const Destination = require('../models/destination');
module.exports = {
  create,
};
function create(req, res) {
  console.log(req.params.id, req.body)
  res.redirect(`/flights/${req.params.id}`)
}
