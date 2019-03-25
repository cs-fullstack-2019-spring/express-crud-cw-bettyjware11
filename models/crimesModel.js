var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CrimeSchema = new Schema({
    category: [{ code: Number, name: String }],

    date: { type: Date, default: Date.now },
    person_id: Number,
    crime: [{
        category: String,
        location_type: String,

        location: [{
            latitude: Number,
            street: [{id: Number, name: String}],
            longitude: Number
        }],
        context: String,
        persistent_id: Number,
        id: Number,
        location_subtype: String,
        month: Number, }]

    });


//Export model
module.exports = mongoose.model('Crime', CrimeSchema);
