//HTML routes are to help direct the user.  When they click on a link (or enter a URL), the router will know what page to deliver to them

var path = require('path');

module.exports = function(app) {
    
    //When user enters 'survey' into the URL, or we want them to go to this page:
    app.get('/survey', function(req, res) {
        //Note this syntax. using an object allows you to set the root at one directory higher.  __dirname doesn't work here
        res.sendFile('/app/public/survey.html', {root: '.'}) 
    });

    //This is the default.  App.use says "When you're using the app, if you haven't already been directed somewhere, go to the home page"
    app.use( function(req, res) {
        res.sendFile('/app/public/home.html', {root: '.'})
    });
}

