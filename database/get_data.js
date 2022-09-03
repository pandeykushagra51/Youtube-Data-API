const db = require('mongoose');
var userModel = require('./schema.js');
const url = 'mongodb+srv://kushagrapandey:fampay@youtube.5eo8zce.mongodb.net/?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
        
const getDataByQuery = async (queryData) =>{
    db.connect(url,connectionParams)
    .then(async () => {
        let limit = queryData.limit;
        let pageNumber = queryData.pageNumber;
        limit = (limit==0?10:limit);
        console.log(pageNumber,limit,queryData.query);
        query = '.*' + queryData.query + '.*';
        let data = await userModel.find(
          { title: { $regex: query } }
          ).sort({"publishTime":-1})
         .skip(pageNumber > 0 ? ( ( pageNumber - 1 ) * limit) : 0)
         .limit(limit);

        queryData.res.send(data);
        console.log(data);
        return data;
    })
    .catch( (err) => {
        console.log(`Error connecting to the database. \n${err}`);
    })
}

module.exports = {getDataByQuery};
