
// Import the Express module
var express = require('express');

var category_Routing=require('./router/routes')
// Create a new Express Instance
const app=express();


const port = process.env.PORT || 3000
// It parses incoming requests with JSON 
app.use(express.json());
//
app.use('/', category_Routing);





// Making  app to  listen to requests made to port 
app.listen(port,()=>
{
    console.log('Server is up on port ' + port);
})