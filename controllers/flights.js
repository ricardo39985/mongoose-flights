const Flight = require('../models/flight');
module.exports = {
  index,
  create,
  delete: deleteFlight,
  show,
  new: newFlight,
};

function index(req, res) {
  Flight.find({}, (err, flights) => {
    res.render('flights', { flights });
  });
}
function newFlight(req, res) {
  res.render('flights/new');
}

function deleteFlight(req, res) {}

function show(req, res) {}
function update(req, res) {}

function create(req, res) {
  const newFlight = new Flight();
  if (req.body.airport) newFlight.airport = req.body.airport;
  if (req.body.depaarts) newFlight.departs = req.body.depaarts;
  newFlight.flightNo = req.body.flightNo;
  newFlight.airline = req.body.airline;
  newFlight.save();
  res.redirect('/flights');
}
