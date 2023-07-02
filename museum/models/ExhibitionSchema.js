const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ExhibitionSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true, minLength: 1, maxLength: 150 },
  description: { type: String, required: true, minLength: 1, maxLength: 150 },
  start_date: Date,
  end_date: Date,
  start_time: String,
  end_time: String,
  additional_notes: {
    location: String,
    time: String,
    admission: String,
  },
  normal_price: { type: Number, required: true, max: 9999 },
  discount: { type: Number, max: 100 },
  accessibility: { type: String, required: true },
});



module.exports = model("Exhibition", ExhibitionSchema);
module.exports = ExhibitionSchema