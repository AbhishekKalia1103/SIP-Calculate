const express = require('express');
const app = express();
const port = 3000;
var routes = require('./Routes/router');

app.use('/api', routes);

app.listen(port, (err,res)=>{
    if(err)console.log('Error '+ err);
    else 
    console.log('App is listening at port 3000');
})