const mongoose = require('mongoose');

// define the mongoDB connection url
const mongoURL = 'mongodb+srv://gcmanage:gcmanage123@cluster0.vv3al.mongodb.net/'

// set up mongoDB connection
mongoose.connect(mongoURL)

// get the default connection 
// mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

//define event listeners for database connection 
db.on('connected', ()=>{
    console.log('connected to mongoDB server');
});

db.on('error', (err)=>{
    console.log('mongoDB connection error:' ,err);
});

db.on('disconnected', ()=>{
    console.log('mongoDB disconnected');
});

// export the database connection
module.exports = db;