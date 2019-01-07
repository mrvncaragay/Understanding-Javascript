/*
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins. -Wikipedia

 */

class PigGame {

    constructor( mscore = 100, cscore = 0, ...players ) {

        //check also if players are Player Class
        if( players.length < 2 ) {
            throw 'Not Enough Player';
        }

        this.mscore = mscore; //max score to win
        this.cscore = cscore; //current score
        this.currentPlayer = this.rollDice(players.length, 1) //1-2; //Player who currently playing
        this.players = players;
        this.numMoves = 1;
    }

    play() {
        //if it roll 6 then add 1 to Num moves
        //if another roll 6 then num moves is 2 then reset.

        let dice = this.rollDice(6,5);
        let conScore = dice;
        this.updateDiceImage(dice);
        this.cscore += dice;

        console.log('conScore: ' + conScore);
        console.log('Dice Roll: ' + dice);
        console.log('Num Moves: ' +this.numMoves);
        console.log('Current Score: ' +this.cscore);

        if(dice === 1 || (this.numMoves === 2 && (conScore + dice) === 12)) {

            this.cscore = 0;
            this.numMoves = 1;
            document.querySelector(`#current-${this.currentPlayer}`).textContent = this.cscore;
            this.changePlayer();

        } else {
            this.numMoves >= 2 ? this.numMoves = 1 : this.numMoves++;
            document.querySelector(`#current-${this.currentPlayer}`).textContent = this.cscore;
        }
    }

    saveScore() {
        let cp = this.currentPlayer - 1;

        this.players[cp].score += this.cscore;

        document.querySelector(`#score-${this.currentPlayer}`).textContent = this.players[cp].score;
        document.querySelector(`#current-${this.currentPlayer}`).textContent = 0;
        this.cscore = 0;
        this.whoWin();
        this.changePlayer();
    }

    init() {

        this.resetWindowScore();
        this.setPlayerNames();
        this.coinToss(); //who gets to go first
    }

    reset() {
        this.currentPlayer = this.rollDice(this.players.length, 1);
        this.init();
    }

    coinToss() {

        if(this.currentPlayer === 1) {

            document.querySelector(".player-1-panel").className += ' active';
            document.querySelector(".player-2-panel").classList.remove('active');
        } else {

            document.querySelector(".player-2-panel").className += ' active';
            document.querySelector(".player-1-panel").classList.remove('active');
        }
    }

    updateDiceImage(num) {
        document.querySelector(".dice").src = `dice-${num}.png`;
    }

    changePlayer() {
        this.currentPlayer === 1 ? this.currentPlayer++ : this.currentPlayer--;
        this.coinToss();
    }

    setPlayerNames(){
        for(let i = 0; i < this.players.length; i++) {
            document.querySelector(`#name-${i+1}`).textContent = this.players[i].name;
        }
    }

    resetWindowScore() {

        for(let i = 1; i <= 2; i++) {
            document.querySelector(`#score-${i}`).textContent = 0;
            document.querySelector(`#current-${i}`).textContent = 0;
        }
    }

    //rand number between 1-6
    rollDice(max, min = 1) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    whoWin() {
        let cp = this.currentPlayer - 1;
        if(this.mscore <= this.players[cp].score) {
            alert(`Winner: ${this.players[cp].name}`);
        }
    }
}

class Player {

    constructor(name, score = 0) {
        this.name = name || 'Not Set.';
        this.score = score;
    }
}