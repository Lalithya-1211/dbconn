const express = require('express');
const app = express();
require('./db/mongoose');
const routes = require('./routes/userRoute');

app.use(express.json());

app.use('/', routes);

app.listen(7075,(req,res)=>{
    console.log('port started at 7075');

})

