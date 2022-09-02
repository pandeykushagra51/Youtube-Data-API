const db = require('mongoose');
var userModel = require('./schema.js');
const url = 'mongodb+srv://kushagrapandey:fampay@youtube.5eo8zce.mongodb.net/?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
        
const getDataByQuery = async (pageNum=0,offset=0,query,res) =>{
    db.connect(url,connectionParams)
    .then(async () => {
        offset = Math.max(offset,10);
        let data = await userModel.find({
              $search: {
                index: 'default',
                text: {
                  query: query,
                  path: {
                    'wildcard': '*'
                  }
                }
              }
            }
          ).skip(pageNum*offset).limit(offset).sort({"publishTime":-1});
        res.send(data);
        console.log(data);
        return data;
    })
    .catch( (err) => {
        console.log(`Error connecting to the database. \n${err}`);
    })
}

module.exports = {getDataByQuery};
