const express = require('express');
const bodyParser = require('body-parser');

const adminroutes = require('./routings/admin');
const shoprouters = require('./routings/shop');

const app = express();
// app.use('/', (req, res, next) => {
//     console.log('This middleware always runs');
//     next();
// });  //This function meant t run everytime if the request doesn't match any of the other urls, this will handle the 404 error if nothing detected


// this middleware function is for parsing the request body!! 

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(adminroutes);
app.use(shoprouters);

app.listen(8080);