var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//This line allows you to use your Public folder docs (i.e. connecting your CSS when calling the HTML)
app.use(express.static('app/public'));

//This will bring in the API routes from the file and pass Express INTO that file.
//API routes should be listed first b/c that's where we're pulling the data to display inside the HTML page
require('./app/routing/apiRoutes.js')(app);

//This will bring in the HTML Routes from the file, and also pass Express IN TO that file.
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});