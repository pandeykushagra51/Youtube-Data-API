const express = require('express');
const url = require('url');
const {callYoutubeApi} = require('./YouTubeAPI/load_data');
const {addApiKey} = require('./YouTubeAPI/api-key');
const {getDataByQuery,getAllData} = require('./database/get_data');
const app = express();

/**
 * get request on root path
 */
app.get('/',async (req,res)=>{
    let queryData = getQueryData(req,res);
    queryData.query='';
    await getAllData(queryData);
})

/**
 * get request on path /search
 */
app.get('/search', async (req,res)=>{
    let queryData = getQueryData(req,res);
    await getDataByQuery(queryData);
})

app.post('/addkey/:key',(req,res)=>{
    let key = req.params.key;
    addApiKey(key);
    res.send('done successfully');
})

app.use('', (req,res)=>{
    res.send('Invalid request');
})

/**
 * call youtube API at interval of every 10 second
 */
// setInterval(()=>{
//     callYoutubeApi();
// },10000);


function getQueryData(req,res){
    let urlData = url.parse(req.url,true);
    let queryObject = urlData.query;
    let pageNumber = parseInt(queryObject.pageNumber);
    let limit = parseInt(queryObject.limit);

    if(isNaN(limit))limit=10;
    if(isNaN(pageNumber))pageNumber=1;
    
    let query = queryObject.query;
    return {
        'pageNumber':pageNumber,
        'limit':limit,
        'res':res,
        'query':query
    }
}

module.exports = {app};
