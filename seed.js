require('./config/databse');

const Flight = require('./models/flight');

const p1 = Flight.deleteMany({});

async function seedAsync() {
  try {
    await Promise.all([p1]);
  } catch (err) {
  }
  process.exit();
}
seedAsync()
