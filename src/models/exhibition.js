const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exhibitionSchema = new Schema({
    id: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    title: { type: String, required: true, minlength: 1, maxlength: 150 },
    exhibition_type: { type: String },
    content: {
        description: { type: String, required: true, minlength: 0 },
        links: { type: Array }
    },
    date: {
        start_date: { type: Date },
        end_date: { type: Date },
    },
    time: {
        start_time: { type: String },
        end_time: { type: String },
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
    accessibility: { type: String, enum: ['FOR ALL', 'ADULTS', 'CHILDREN', 'FAMILIES', 'SENIORS', 'SPECIAL NEEDS', 'STUDENTS', 'TEACHERS'], default: "FOR ALL", required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Exhibition', exhibitionSchema);