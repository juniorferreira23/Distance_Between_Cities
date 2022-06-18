const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    
    city1: {
        type:String,
        required: [true, 'city origin required'],
        minlength: [6, 'Must be at least 6}'],
        maxlength: [50, 'greater than 50 characters']
    },
    city2: {
        type:String,
        required: [true, 'destination city required'],
        minlength: [6, 'Must be at least 6'],
        maxlength: [50, 'greater than 50 characters'] 
    }
});

const Cities = new mongoose.model('Cities', citiesSchema);

module.exports = Cities;