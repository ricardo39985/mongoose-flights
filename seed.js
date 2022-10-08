require('./config/databse');

const Flight = require('./models/flight');
const Ticket = require('./models/ticket');

const p1 = Flight.deleteMany({});
// const p2 = Ticket.deleteMany({});


async function seedAsync() {
  try {
    await Promise.all([p1]);
  } catch (err) {
  }
  process.exit();
}
seedAsync()
