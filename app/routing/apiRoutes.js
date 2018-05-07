//API Routes are for the data.  These help determine what data the user sees as well as what data the user is able to post to the server to store

//First, pull in the friendzone
var friendList = require('./../data/friends.js');

//The app represents 'Express' again
module.exports = function (app) {

    //This says, "When someone goes to this URL, display the friend list in json format"
    app.get('/api/friendzone', function (req, res) {
        res.json(friendList);
    })

    //Build a POST route to allow users to post to the API
    app.post('/api/friendzone', function(req, res) {
        console.log(req.body);
        friendList.friendZone.push(req.body);
    })
}
