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

userSchema.index({ title: 'text', description: 'text' },{weights: {title:1, description:3}});
 
module.exports = mongoose.model('Users', userSchema);