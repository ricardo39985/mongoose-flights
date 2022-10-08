const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
module.exports = {
  new: newTicket,
  create,
  delete: deleteOne,
};
function newTicket(req, res) {
  Flight.findById(req.params.flightId, function (err, flight) {
    res.render('tickets/new', { flight });
  });
}
function create(req, res) {
  Flight.findById(req.params.flightId, function (err, flight) {
    const newTicket = new Ticket(req.body);
    newTicket.flight = flight;
    newTicket.save();
    res.redirect(`/flights/${req.params.flightId}`);
  });
}

function deleteOne(req, res) {
  Ticket.deleteOne({ _id: req.params.id }, function (err, ticket) {
    res.redirect(`/flights/${req.body.flightId}`);
  });
}
