const Flight = ('../models/flight')
module.exports = {
  index,
  create,
  delete: deleteFlight,
  show,
  new: newFlight,
};

function index(req, res) {

}
function newFlight(req, res) {
  res.render('flights/new')

}

function deleteFlight(req, res) {}

function show(req, res) {}
function update(req, res) {}
function create(req, res) {}
