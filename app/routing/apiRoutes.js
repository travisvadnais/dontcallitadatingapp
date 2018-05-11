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
        console.log(friendList);
        //We're going to return the object of the friend who matches closest to the user. (See all the nonsense below)
        res.json(friendList[compareAnswers(req.body)]);
        friendList.push(req.body);
    })
}

function compareAnswers(user) {
    //This array will catch the sum of each friendZone user's question comparisons
    var results = [];
    //Loop through the current list of friends
    for (var i = 0; i < friendList.length; i++) {
        //Set array to capture the result of each of newuser's answers vs. friendZone's answers
        var differences = [];
        //Loop thru the q's of the current friendZone user and compare all answers w/ new user
        for (var j = 0; j < user.scores.length; j++) {
            //Parse all the new user scores and the guy you're comparing to
            var newGuyScores = parseInt(user.scores[j]);
            var existingGuyScores = parseInt(friendList[i].scores[j])
            //Push the difference of each q to the differences array
            differences.push(Math.abs(newGuyScores - existingGuyScores));
        }
        //Fx found on StackOF. This will add all the #s in the array together to find the tot diff
        var totalDifference = differences.reduce((a, b) => a + b, 0);
        //Finally, push the total difference into the array that will hold the sum of all the comparisons
        results.push(totalDifference);
    }
    //Push this array into findFriend and return the result
    return findFriend(results);
}

function findFriend(arr) {
    //Set the first # in the array as the basis for comparison of the rest of the #s
    var min = arr[0];
    var minIndex = 0;
    //Loop thru the array of Q comparisons
    for (var i = 1; i < arr.length; i++) {
        //If the array# is less than the initial 'min' #, it will replace the min#
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    //Return the index of the lowest question comparison
    return minIndex;
}
