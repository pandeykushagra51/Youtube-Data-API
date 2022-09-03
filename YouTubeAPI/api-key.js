const { json } = require('express');
const fs = require('fs');
const keys = require('./keys.json');

/**
 * return the list of keys from key.json file
 */
getApiKeys = async () => keys;

/**
 * addApiKey take a parameter key and save it in keys.json file 
 */
addApiKey = (key) => { 
    keys.push(key);
    // authenticate the api key before saving in file
    fs.writeFile('./YouTubeAPI/keys.json',JSON.stringify(keys),(err)=>{
        if(err){
            console.log('some error occured \n err message: }',err);
            return;
        }
        console.log('key added successfully');
        console.log(keys);
    })
}


module.exports = {getApiKeys,addApiKey};

