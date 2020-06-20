const express = require('express');

const app = express();
app.use('/', (req, res, next) => {
    console.log('This middleware always runs');
    next();
})  //This function meant t run everytime if the request doesn't match any of the other urls, this will handle the 404 error if nothing detected

app.use('/profile', (req, res, next) => {
    res.send('<h1> Add New Profile</h>')
})

app.use('/', (req, res, next) => {
    const url = req.url;
    console.log(url)
    console.log("This is another middleware function");
    res.send('<h2> Hello from the express js</h2>')
})

app.listen(8080);