var friends = require("../data/friends");

module.exports = function (app) {
    //API GET request

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //API POST request to return a matched friend
    app.post("/api/friends", function (req, res) {
        var quiz = req.body;
        var match = 0;
        var difference = 0;

        for (var i = 0; i < friends.length; i++) {
            total = 0;
          //finding the diffrence 
            for (var j = 0; j < friends[i].scores[j]; j++) {
                difference += Math.abs(parseInt(quiz.scores[j]) - parseInt(friends[i].scores[j]));
            }
            if (total < difference) {
                difference = total
                match = i;
            }
        }
        res.json(match);
    })
}