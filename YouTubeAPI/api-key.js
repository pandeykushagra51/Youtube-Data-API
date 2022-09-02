const { json } = require('express');
const fs = require('fs');
const keys = require('./keys.json');

getApiKeys = async () => keys;

addApiKey = (key) => { 
    keys.push(key);
    fs.writeFile('key.json',JSON.stringify(keys),(err)=>{
        if(err){
            console.log('some error occured \n err message: }',err);
            return;
        }
        console.log('key added successfully');
    })
}


module.exports = {getApiKeys,addApiKey};

