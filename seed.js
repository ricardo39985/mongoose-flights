require('./config/databse');

const Destination = require('./models/destination');
const Flight = require('./models/flight');

const p1 = Flight.deleteMany({});
async function seedAsync() {
  try {
    await Promise.all([p1]);
  } catch (err) {
    console.log(err);
  }
  process.exit();
}
seedAsync()
