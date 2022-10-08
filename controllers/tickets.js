module.exports = {
  new: newTicket,
  create,
};
function newTicket(req, res) {
  res.render('tickets/new');
}
function create(req, res) {
  console.log(req.body);
  res.redirect(`/flights/${req.params.id}/tickets/new`);
}
