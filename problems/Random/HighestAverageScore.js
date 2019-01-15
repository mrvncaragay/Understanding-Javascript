var Team = function( teamname, score ) {

    return new Team.init( teamname, score );
}

Team.prototype = {
    getAvgScore: function() {
        var avg = 0;

        for(var i = 0; i < this.score.length; i++){
            avg += this.score[i];
        }

        return (avg / 3);
    },

    getTeamName: function () {
        return this.teamname;
    }
}

Team.init = function ( teamname, score ) {
    this.teamname = teamname;
    this.score = score;
}

Team.init.prototype = Team.prototype;

winnerTeam = function(...Team) {

    var highestAvg = 0,
        winners = '',
        len = Team.length;

    for( var i = 0; i < len; i++) {

        if ( Team[i].getAvgScore() > highestAvg ) {
            highestAvg = Team[i].getAvgScore();
            winners = Team[i].getTeamName();

        } else if( Team[i].getAvgScore() === highestAvg ) {
            winners += ` ${Team[i].getTeamName()}`;
        }
    }

    console.log(`The winner is ${winners}`);
}

var teamJohn = Team('TeamJohn', [89, 120, 103]);
var teamMike = Team('TeamMike',[116, 94, 123]);
var teamMary = Team('TeamMary',[97, 134, 105]);
var teamJoy = Team('TeamJoy',[97, 133, 106]);

console.log(teamJohn.getAvgScore());
console.log(teamMike.getAvgScore());
console.log(teamMary.getAvgScore());
console.log(teamJoy.getAvgScore());

winnerTeam(teamJohn, teamMike, teamJoy, teamMary);