const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const admindata = require('./routings/admin');
const shoprouters = require('./routings/shop');

const app = express();
// app.use('/', (req, res, next) => {
//     console.log('This middleware always runs');
//     next();
// });  //This function meant t run everytime if the request doesn't pass any url in the URI, 


// this middleware function is for parsing the request body!! 

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admindata.router);
app.use(shoprouters);
 
// This is to handle the error (Page Not Found)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not_found.html'));
})

app.listen(8080);