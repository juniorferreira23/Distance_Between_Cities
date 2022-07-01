const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    
    city1: {
        type: String,
        required: [true, 'city origin required'],
        minlength: [5, 'Must be at least 5}'],
        maxlength: [40, 'greater than 40 characters']
    },
    city2: {
        type: String,
        required: [true, 'destination city required'],
        minlength: [5, 'Must be at least 5'],
        maxlength: [40, 'greater than 40 characters'] 
    },
    distance: {
        type: Number,
        required: [true, 'distance between cities required'],
    },
    
});

const Cities = new mongoose.model('Cities', citiesSchema);

module.exports = Cities;