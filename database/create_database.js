const db = require('mongoose');
var userModel = require('./schema.js');
const url = 'mongodb+srv://kushagrapandey:fampay@youtube.5eo8zce.mongodb.net/?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
}

/**
 * @param {Object} data - list of data to be inserted in mongo db atlas
 * insert the data in mongo db atlas database 
 */
const insertData = async (data) =>{
    db.connect(url,connectionParams)
    .then(async () => {
        userModel.insertMany(data).then(function(){
            console.log("Data inserted")  // Success
        }).catch(function(error){
            console.log(error)      // Failure
        });
    })
    .catch( (err) => {
        console.log(`Error connecting to the database. \n${err}`);
    })
}

module.exports = {insertData};
