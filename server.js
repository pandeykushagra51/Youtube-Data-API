const server = require('./index.js');
const PORT = process.env.PORT || 3000;







/**
 * call youtube API at interval of every 10 second
 */
setInterval(()=>{
    callYoutubeApi();
},10000);


server.app.listen(PORT, ()=>{
    console.log('Server started and Listening on port :',PORT);
})
