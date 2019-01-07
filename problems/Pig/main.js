
var Marv = new Player('Marv', 0)
var Mark = new Player('Mark', 0)

var pGame = new PigGame(100, 0, Marv, Mark);
pGame.init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    pGame.play();
});

document.querySelector('.btn-new').addEventListener('click',function(){
    pGame.reset();
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    pGame.saveScore();
});