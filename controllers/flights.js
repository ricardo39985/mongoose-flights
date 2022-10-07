const Flight = require('../models/flight');
const Destination = require('../models/destination');
module.exports = {
  index,
  create,
  delete: deleteFlight,
  show,
  new: newFlight,
};

function index(req, res) {
  Flight.find({})
    .sort('departs')
    .exec((err, flights) => {
      res.render('flights', { flights });
    });
}
function newFlight(req, res) {
  res.render('flights/new', { defaultDepartDate: new Flight().departs });
}

function deleteFlight(req, res) {}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate('destinations')
    .exec(function (err, flight) {
      Destination.find({ _id: { $nin: flight.destination } }, function (err, destinations) {
        res.render('flights/show', { flight, destinations, defaultDepartDate: new Flight().departs });
      });
    });
}
function update(req, res) {}

function create(req, res) {
  const newFlight = new Flight();
  if (!req.body.airport) newFlight.airport = req.body.airport;
  if (!req.body.depaarts) newFlight.departs = new Date(req.body.departs);
  newFlight.flightNo = req.body.flightNo;
  newFlight.airline = req.body.airline;
  newFlight.save();
  res.redirect('/flights');
}
