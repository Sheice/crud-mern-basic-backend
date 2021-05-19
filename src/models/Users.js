const {Schema, model} = require('mongoose');

const newUser = new Schema({
    username: {
        type: String,
        require:true,
        trim:true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = model('User', newUser);