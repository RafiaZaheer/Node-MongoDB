
//const mongoose = require('mongoose');
const mongoose = require('mongodb').MongoClient

mongoose.connect('mongodb://localhost:27017/CrudDB',{ useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded...');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
}, );

module.exports = mongoose;