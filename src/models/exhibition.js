const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exhibitionSchema = new Schema({
    id: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    title: { type: String, required: true, minlength: 1 },
    content: {
        description: { type: String, required: true, minlength: 0 },
        links: { type: Array, required: true, default: [] }
    },
    duration: { type: Number, required: true },
    date: {
        start_date: { type: Date, required: true, default: Date.now },
        end_date: { type: Date, required: true, default: Date.now },
    },
    time: {
        start_time: { type: String, required: true, default: getCurrentTime },
        end_time: { type: String, required: true, default: getCurrentTime },
    },
    additional_notes: {
        location: { type: String },
        time: { type: String },
        admission: { type: String }
    },
    price: {
        SG_PR: {
            adults: { type: Number, min: 0 },
            children: { type: Number, min: 0 },
            seniors: { type: Number, min: 0 },
            special_needs: { type: Number, min: 0 },
            students: { type: Number, min: 0 },
            teachers: { type: Number, min: 0 }
        },
        Tourist_FR: {
            adults: { type: Number, min: 0 },
            children: { type: Number, min: 0 },
            seniors: { type: Number, min: 0 },
            special_needs: { type: Number, min: 0 },
            students: { type: Number, min: 0 },
            teachers: { type: Number, min: 0 }
        }
    },
    accessibility: { type: String, enum: ["For All","Adults","Children","Families","Seniors","Special Needs","Students","Teachers"], default: "For All", required: true }
}, {
    timestamps: true
});

function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

module.exports = mongoose.model('Exhibition', exhibitionSchema);