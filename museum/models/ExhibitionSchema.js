const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ExhibitionSchema = new Schema({
    id: Number, required, unique,
    image: String, required,
    title: String, required, minLength: 1, maxLength: 150,
    description: String, required, minLength: 1, maxLength: 150,
    start_date: Date,
    end_date: Date,
    start_time: String,
    start_time: String,
    additional_notes: {
        location: String,
        time: String,
        admission: String
    },
    normal_price: Number, required, max: 9999,
    discount: Number, max: 100,
    accessibility: String, required,
});

module.exports = model("Exhibition", ExhibitionSchema);