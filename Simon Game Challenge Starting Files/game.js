let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
let checkedLength = 0;

function nextSquence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    level += 1;
    $("h1").text("Level " + level);
}

function playSound(name){
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.volume = 0.1;
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).fadeOut(150).fadeIn(150);
}

$(".btn").on("click", (e) => {
    if (started == true) {
        let userChosenColour = e.target.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        console.log(gamePattern);
        console.log(userClickedPattern);
        checkAnswer(level);
        
    }

})


$(document).on("keydown", (e) => {
    if (started == false) {
        nextSquence();
        started = true;
        $("h1").text("Level " + level);
    }
})

function checkAnswer(currentLevel) {
    for (let i = 0; i < checkedLength + 1; i++) {
        if (gamePattern[i] != userClickedPattern[i]) {
            console.log("game " + gamePattern[i]);
            console.log("user " + userClickedPattern[i]);
            gameOver();
            return;
        }
    }
    
      
    checkedLength += 1;
    if (checkedLength == gamePattern.length) {
        userClickedPattern = [];
        checkedLength = 0;
        setTimeout(() => {
            nextSquence();
        }, 1000);
    }
    
    
    
    
    

}


function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
    $("body").removeClass("game-over");
    }, 200);
    userClickedPattern = [];
    gamePattern = [];
    started = false;
    $("h1").text("Press A Key to Start Last Run: " + (level - 1)  + " levels");
    level = 0;
    checkedLength = 0;
}


