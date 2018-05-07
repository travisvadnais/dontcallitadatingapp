$(document).ready(function () {
    
    var questions = [
        {Question_Num: 1, Question_ID: "Q1", Question: "Agreeing on Politics is Important to You in a Match"},
        {Question_Num: 2, Question_ID: "Q2", Question: "Chad Kroger is the Songbird of Our Generation"},
        {Question_Num: 3, Question_ID: "Q3", Question: "It's Better to Ask Forgiveness than to Ask Permission"},
        {Question_Num: 4, Question_ID: "Q4", Question: "A Hotdog is a Sandwich"},
        {Question_Num: 5, Question_ID: "Q5", Question: "Pumpkin Spice Should Be Banished from the Planet"},
        {Question_Num: 6, Question_ID: "Q6", Question: "I'll Try to Get out of a Wedding if it's not Open Bar"},
        {Question_Num: 7, Question_ID: "Q7", Question: "My Friends Consider Me Outgoing"},
        {Question_Num: 8, Question_ID: "Q8", Question: "After Age 25, It's All Downhill"},
        {Question_Num: 9, Question_ID: "Q9", Question: "I Always Wear My Seatbelt"},
        {Question_Num: 10, Question_ID: "Q10", Question: "I Really Just Want to Chill During 'Netflix & Chill'"}
    ];
    

    //Loop to create the survey
    //Did it this way to avoid hardcoding 10 identical massive divs
    for (var i = 0; i < questions.length; i++) {
        var qDiv = 
            "<div class='question'>"+
                `<h3><b>Question: ` + questions[i].Question_Num + `</b></h3>
                <h5 class="quesText">` + questions[i].Question + `</h5>
                <div class="form-group">`+
                    "<label for="+questions[i].Question_ID+"></label>"+
                    "<select class='form-control' id="+questions[i].Question_ID+">"+
                        `<option value="">Select an Answer</option>
                        <option value="1">1 - Strongly Disagree</option>
                        <option value="2">2</option>
                        <option value="3">3 - Neither Agree Nor Disagree</option>
                        <option value="4">4</option>
                        <option value="5">5 - Strongly Agree</option>
                    </select>
                </div>
            </div>`
        $("#fullSurvey").append(qDiv);
    }


//When the user submits . . . . 
$("#submitSurvey").on("click", function() {
      
    //Set all of his/her data to the the newFriend object
    var newFriend = {
      userName: $("#username").val().trim(),
      photo: $("#photo").val().trim(),
      gender: $("#gender").val().trim(),
      scores: [
        $("#Q1").val(),
        $("#Q2").val(),
        $("#Q3").val(),
        $("#Q4").val(),
        $("#Q5").val(),
        $("#Q6").val(),
        $("#Q7").val(),
        $("#Q8").val(),
        $("#Q9").val(),
        $("#Q10").val()
      ]
    }

    //Log it to make sure it's pretty
    console.log(newFriend);

    //Grab their URL location
    var currentURL = window.location.origin;

    //Then send a POST request to the API to add the newFriend data
    $.post("/api/friendzone", newFriend, function(data) {

      //Reset all the survey values to defaults
      $("#username").val("");
      $("#photo").val("");
      $("#gender").val("");
      $("#Q1").val("");
      $("#Q2").val("");
      $("#Q3").val("");
      $("#Q4").val("");
      $("#Q5").val("");
      $("#Q6").val("");
      $("#Q7").val("");
      $("#Q8").val("");
      $("#Q9").val("");
      $("#Q10").val("");
    })
  })





})