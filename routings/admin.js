const express = require('express');

const router = express.Router();

router.use('/new-profile', (req, res, next) => {
    // console.log("New Porfile is Adding...")
    // res.send('<h1> Add New Profile</h>')
    res.send('<form action="/profile" method="POST"><input type="text" name="title"><button type="submit">Add Product</button>')
});

//This middleware always access whether it is POST or GET request {here is the new logic mentioned for too restrict it to just POST request}, for that just change the app.use to app.post
router.post('/profile', (req, res, next) => {
    console.log("This is the request body: ", req.body);
    res.redirect('/');
});

module.exports = router;