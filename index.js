const express = require('express');
const url = require('url');
const {callYoutubeApi} = require('./YouTubeAPI/load_data');
const {getDataByQuery,getAllData} = require('./database/get_data');
const app = express();

/**
 * get request on root path
 */
app.get('/', (req,res)=>{
    let queryData = getQueryData(req,res);
    queryData.query='';
    getAllData(queryData);
})

/**
 * get request on path /search
 */
app.get('/search', async (req,res)=>{
    let queryData = getQueryData(req,res);
    getDataByQuery(queryData);
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
