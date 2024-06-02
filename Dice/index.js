let randomLeft = Math.floor(Math.random() * 6) + 1;
let randomRight = Math.floor(Math.random()* 6)  + 1;


let leftImg = document.querySelector(".img1");
let rightImg = document.querySelector(".img2");

let title = document.querySelector("h1");

function swapImage(number, img) {
    let resultStr = "./images/dice" + number + ".png";
    console.log("resultStr");
    img.setAttribute("src", resultStr);
}

swapImage(randomLeft, leftImg);
swapImage(randomRight, rightImg);

if (randomLeft > randomRight) {
    title.textContent = "Left Player Win";
} else if (randomLeft < randomRight) {
    title.textContent = "Right Player Win";

} else {
    title.textContent = "It is a draw!";
    
}
