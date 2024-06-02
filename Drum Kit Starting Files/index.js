let audioList = [];
audioList.push(new Audio("./sounds/crash.mp3"));
audioList.push(new Audio("./sounds/kick-bass.mp3"));
audioList.push(new Audio("./sounds/snare.mp3"));
audioList.push(new Audio("./sounds/tom-1.mp3"));
audioList.push(new Audio("./sounds/tom-2.mp3"));
audioList.push(new Audio("./sounds/tom-3.mp3"));
audioList.push(new Audio("./sounds/tom-4.mp3"));
audioList.forEach((element) => {
  element.volume = 0.2;
});

// let drums = document.querySelectorAll(".drum");

// drums.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     playAudio(element.innerHTML); // or this.className[0]
//     buttonAnimation(element.innerHTML);
//   });
// });

$(".drum").click(function(){
    playAudio(this.innerHTML); // or this.className[0]
    buttonAnimation(this.innerHTML);
})

// document.addEventListener("keydown", function (event) {
//   playAudio(event.key);
//   buttonAnimation(event.key);
// });

$(document).keydown(function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
})

function playAudio(keyCode) {
  switch (keyCode.toLowerCase()) {
    case "w":
      audioList[6].play();
      break;

    case "a":
      audioList[5].play();
      break;

    case "s":
      audioList[4].play();
      break;

    case "d":
      audioList[3].play();
      break;

    case "j":
      audioList[2].play();
      break;

    case "k":
      audioList[1].play();
      break;

    case "l":
      audioList[0].play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
//   let activeButton = document.querySelector("." + currentKey.toLowerCase());
//   activeButton.classList.add("pressed");
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 500);

$("." + currentKey.toLowerCase()).addClass("pressed");
setTimeout(function() {
$("." + currentKey.toLowerCase()).removeClass("pressed");

}, 150);
}
