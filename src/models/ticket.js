const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  exhibitions: [{ type: Schema.Types.ObjectId, ref: "Exhibition" }],
  price: { type: Number, required: true, max: 9999 },
  purchase_date: {type: Date}
});

module.exports = model("Ticket", ticketSchema);
