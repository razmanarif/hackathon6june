const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  items: 
    {
      item: String,
      quantity: Number,
    },
  
  deliveryDate: Date,
  status: {
    type: String,
    enum: ['free', 'inProgress', 'fulfilled'],
  },
});

module.exports = mongoose.model('List', listSchema);
