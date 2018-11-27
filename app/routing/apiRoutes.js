var friends = require("../data/friends");

module.exports = function (app) {
    //API GET request

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //API POST request to return a matched friend
    app.post("/api/friends", function(req, res) {

         console.log(req.body)

        var maximum = 50;
        var match = {};
        var userData = req.body.scores;
        // loop through all friends in friends.js
        for (var i = 0; i < friends.length; i++) {
          
          var difference = 0;
            // loop through the users scores from the survey.html inputs
           for (var j = 0; j < userData.length; j++){
            // get the total differenceerence of the users score and each of the friends scores 
            //  math.abs for absolute value
                var total = Math.abs(userData[j]-friends[i].scores[j]);
                difference += total;
           }

           if (difference < maximum){
            maximum = difference;
            match = friends[i];
            }

        }

        res.json(match);

      });
  
    
};