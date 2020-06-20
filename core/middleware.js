const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('This is a middleware function');
    next(); //This work as a continue statement which allows the request to transmit through the next middleware
})

app.use((req, res, next) => {
    console.log("This is another middleware function");
    res.send('<h2> Hello from the express js</h2>')
})

app.listen(8080);