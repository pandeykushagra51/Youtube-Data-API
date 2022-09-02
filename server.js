const server = require('./index.js');
const PORT = process.env.PORT || 3000;





server.app.listen(PORT, ()=>{
    console.log('Server started and Listening on port :',PORT);
})