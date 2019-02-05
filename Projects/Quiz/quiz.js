(function() {

    function Quiz(qt) {
        this.qt = qt.qt;
        this.ans = qt.ans;
        this.an = qt.an;
    }

    Quiz.prototype.displayQuestion = function () {
        console.log(this.qt);

        for (let i = 0; i < this.ans.length; i++) {
            console.log(`${i}: ${this.ans[i]}`);
        }
    }

    Quiz.prototype.checkAns = function (an, scfn) {

        if( this.an === an ){
            console.log(`Correct answer!\nCurrent score: ${scfn(true)}\n-----------------------------`);


        } else {
            console.log(`Wrong answer. Try again :)\nCurrent score: ${scfn(false)}\n-----------------------------`);
        }
    }

    function score() {
        let sc = 0;

        return function(correct) {
           return correct ? ++sc : sc;
        }
    }

    let keepScore = score();

    let q1 = {
        qt: "What was the last thing you created?",
        ans: ['Code Question', 'Nothing', 'Watch Movie'],
        an: 0
    }

    let q2 = {
        qt: "What piece of technology brings you the most joy?",
        ans: ['PC', 'Iphone', 'TV'],
        an: 0
    }

    let q3 = {
        qt: "What’s your “going to bed” routine?",
        ans: ['Shower', 'Wash Face', 'Brush Teeth'],
        an: 1
    }

    let q4 = {
        qt: "What animal best represents your personality?",
        ans: ['Kind', 'Coder', 'Daring'],
        an: 2
    }

    let question1 = new Quiz(q1);
    let question2 = new Quiz(q2);
    let question3 = new Quiz(q3);
    let question4 = new Quiz(q4);

    let qts = [question1, question2, question3, question4];

    function nextQuestion() {

        let n = Math.floor(Math.random() * qts.length);

        qts[n].displayQuestion();

        let prmt = prompt("Please select the correct answer.");

        if( prmt !== 'exit') {
            qts[n].checkAns(Number(prmt), keepScore);
            nextQuestion(); //call the question function again.
        }
    }

    nextQuestion();
})();