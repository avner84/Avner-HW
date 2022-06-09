const miniDiv = document.querySelector("#smallDiv");
// miniDiv.addEventListener("mouseover", moveDiv);

var time = 60;
const h3Timer = document.querySelector("#runTime");
var timerInterval = null;
var moveTimeout = null;
var scores = 0;
var level = 1;
const h3Score = document.querySelector("#h3Score");
var missedClicks = 0;
const h3MissedClicks = document.querySelector("#h3MissedClicks");
const container = document.querySelector("#container");
container.addEventListener("click", negativeScore);
miniDiv.addEventListener("mousedown", addPositiveScore);
var pointToNextLevel = 10;
const h3Level = document.querySelector("#h3Level");
const h3pointsToNextLevel = document.querySelector("#h3pointsToNextLevel");
const colorsMiniDiv = ["red", "yellow", "greenyellow", "blue", "white"];
let winners = [];
const user = {};
let divEscapeTime = 300;
let flag = true;
let divRotationTime = 2;

function moveDiv() {
    if (!moveTimeout) {
        moveTimeout = setTimeout(function() {
            var top = Math.floor(Math.random() * 80) + 5;
            var left = Math.floor(Math.random() * 87) + 3;
            miniDiv.style.top = top + "%";
            miniDiv.style.left = left + "%";
            clearTimeout(moveTimeout);
            moveTimeout = null;
        }, divEscapeTime);
    }
}

function rotateDiv() {
    miniDiv.style.WebkitTransitionDuration = "2s";
    miniDiv.style.webkitTransform = "rotate(360deg)";
    // miniDiv.style.animationIterationCount = "infinite";
}

function runTimer() {
    const timerInterval = setInterval(function() {
        if (time > 0) {
            time--;
            h3Timer.innerHTML = time;
        } else {
            // gameOver();
        }
    }, 1000);
}

function addPositiveScore(event) {
    scores += level * 10;
    h3Score.innerHTML = scores;
    event.stopPropagation();
    pointToNextLevel -= 1;
    h3pointsToNextLevel.innerHTML = pointToNextLevel;

    if (pointToNextLevel === 0) {
        nextLevel();
    }
}

function negativeScore() {
    missedClicks += 1;
    h3MissedClicks.innerHTML = missedClicks;

    scores -= level;
    h3Score.innerHTML = scores;
}

function nextLevel() {

    if (level === 6) {
        // gameOver()
    } else {

        miniDiv.style.backgroundColor = colorsMiniDiv[level];
        pointToNextLevel = 10;
        h3pointsToNextLevel.innerHTML = pointToNextLevel;
        level += 1;
        h3Level.innerHTML = level;
        time += 10;
        h3Timer.innerHTML = time;
        divEscapeTime -= 50;
        divRotationTime -= 0.25;
        // miniDiv.style.animationDuration = divRotationTime + "s";
        miniDiv.style.animationDuration = divRotationTime + "s"


    }
}

function gradesDirector() {
    if (winners.length < 5) {
        newWinner();
    } else {
        if (winners.length > 1) {
            winners.sort((a, b) => parseFloat(b.grade) - parseFloat(a.grade)); //Arranges the array from high grade to low
        }

        for (let i = 0; i < winners.length; i++) {
            if (winners[length - 1].grade < scores) {
                winners.pop();
                newWinner();
            }
        }
    }
}

function newWinner() {
    user.name = prompt(
        `Congratulations on your achievement!
    Please enter your name to enter our list of winners`
    );

    if (user.name == null) {
        user.name = "unnamed";
    }

    user.grade = scores;
    winners.push(user);
    if (winners.length > 1) {
        winners.sort((a, b) => parseFloat(b.grade) - parseFloat(a.grade)); //Arranges the array from high grade to low
    }
    localStorage.setItem("Winners", JSON.stringify(winners));
    updateWinersList()
}

function updateWinersList() {
    debugger;
    if (localStorage.getItem("Winners")) {
        winners = JSON.parse(localStorage.getItem("Winners"));
        let winnerDetails = "";
        winners.forEach(
            (element) =>
            (winnerDetails += `<div class="h5WinnerDetails">
            <h5>${element.name}</h5>
            <h5>${element.grade}</h5>
        </div>`)
        );
        document.querySelector("#winnersList").innerHTML = winnerDetails;
    }
}

function restart() {
    updateWinersList();
    miniDiv.addEventListener("mouseover", moveDiv);


    runTimer();
}


function gameOver() {

    if (flag) {

        clearInterval(timerInterval);
        alert("GAME OVER");
        gradesDirector();
        flag = false;
    }
}

restart();