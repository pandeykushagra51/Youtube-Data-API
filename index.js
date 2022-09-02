const express = require('express');
const url = require('url');
const {callYoutubeApi} = require('./YouTubeAPI/load_data');
const {getDataByQuery} = require('./database/get_data');
const app = express();


app.get('/', (req,res)=>{
    res.send('Homepage called');
})

app.get('/search', async (req,res)=>{
    let urlData = url.parse(req.url);
    let queryObject = urlData.query;
    let pageNumber = parseInt(queryObject.pageNumber);
    let offset = parseInt(queryObject.offset)
    let data = await getDataByQuery(pageNumber,offset,queryObject.query,res);
    console.log(data,queryObject);
})

/*
setInterval(()=>{
    console.log('i am called');
//    callYoutubeApi();
},8000);
*/

module.exports = {app};
