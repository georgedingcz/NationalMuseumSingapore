const mongoose = require("mongoose");
const Exhibition = require("./ExhibitionSchema");
const { Schema, model } = mongoose;

const TicketingSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  exhibitions: [Exhibition],
  price: { type: Number, required: true, max: 9999 },
  purchase_date: Date,
});

module.exports = model("Ticketing", TicketingSchema);
