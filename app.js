const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
// const expresshbs = require('express-handlebars');

const admindata = require('./routings/admin');
const shoprouters = require('./routings/shop');

const app = express();
// app.use('/', (req, res, next) => {
//     console.log('This middleware always runs');
//     next();
// });  //This function meant t run everytime if the request doesn't pass any url in the URI, 


// app.engine('handlebars', expresshbs({layoutsDir: 'views/layouts/', defaultLayout:'basic'}));
// app.set('view engine', 'pug');
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs');
app.set('views', 'views');

// this middleware function is for parsing the request body!! 
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admindata.router);
app.use(shoprouters);
 
// This is to handle the error (Page Not Found)
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', 'not_found.html'));
    res.status(404).render('not_found', {pagetitle: 'Page Not Found'});
})

app.listen(8080);