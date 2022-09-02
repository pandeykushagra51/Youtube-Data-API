const mongoose = require('mongoose');
 
// create an schema
var userSchema = new mongoose.Schema({
            publishedAt : String,
            channelId : String,
            title : String,
            description: String,
            thumbnails: [Object],
            channelTitle: String,
            liveBroadcastContent: String,
            publishTime: String
        });
 
module.exports = mongoose.model('Users', userSchema);