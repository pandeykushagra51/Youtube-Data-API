const express = require('express');
const url = require('url');
const {callYoutubeApi} = require('./YouTubeAPI/load_data');
const {getDataByQuery} = require('./database/get_data');
const app = express();


app.get('/', (req,res)=>{
    let queryData = getQueryData(req,res);
    queryData.query='';
    getDataByQuery(queryData);
})

app.get('/search', async (req,res)=>{
    let queryData = getQueryData(req,res);
    getDataByQuery(queryData);
})


setInterval(()=>{
 //   console.log('i am called');
    callYoutubeApi();
},8000);


function getQueryData(req,res){
    let urlData = url.parse(req.url,true);
    let queryObject = urlData.query;
    let pageNumber = parseInt(queryObject.pageNumber);
    let limit = parseInt(queryObject.limit);
    let query = queryObject.query;
    return {
        'pageNumber':pageNumber,
        'limit':limit,
        'res':res,
        'query':query
    }
}

module.exports = {app};
