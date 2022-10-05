const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const destinationSchema = new Schema({
  airpot: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  arrival: Date,
});

module.exports= mongoose.model('Destination', destinationSchema)
