const express = require('express');

const app = express();
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