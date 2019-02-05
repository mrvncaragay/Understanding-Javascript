
var Marv = new Player('Marv', 0)
var Mark = new Player('Mark', 0)

var pGame = new PigGame(100, 0, Marv, Mark);
pGame.init();

function maxScore() {
    return document.querySelector('#winning-score').value;
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    let winningNum = maxScore();
    if(winningNum){ pGame.setMaxScore(winningNum)}

    pGame.play();

});

document.querySelector('.btn-new').addEventListener('click',function(){
    pGame.reset();
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    pGame.saveScore();
});