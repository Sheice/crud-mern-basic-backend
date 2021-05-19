const {Schema, model} = require('mongoose');

const newNote = new Schema({
    title: String,
    description: {
        type: String,
        required: true
    },
    author: String,
},{
    timestamps: true
});

module.exports = model('Note', newNote);