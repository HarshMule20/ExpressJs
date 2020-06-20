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

app.use('/admin', adminroutes);
app.use('/shop', shoprouters);

// This is to handle the error (Page Not Found)
app.use((req, res, next) => {
    res.status(404).send("<h2> Oops!!!! Page Not Found</h2>")
})

app.listen(8080);