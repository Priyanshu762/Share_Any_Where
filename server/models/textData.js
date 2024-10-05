const mongoose = require('mongoose');

// Define the schema for Text
const textSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create the model
const Text = mongoose.model('Text', textSchema);

module.exports = Text;
