let guessInput = document.querySelectorAll(".guess-input");
let i = 0;
let imgs = document.querySelectorAll("img");

window.addEventListener("load", () => {
    guessInput[0].focus();
})
let movieName = ["a", "b", "c", "d"]
guessInput.forEach((el) => {
    el.addEventListener("input", () => {
        if (el.value == movieName[i].toLowerCase() || el.value == movieName[i].toUpperCase()) {
            el.disabled = true;
        }
        else {
            imgs[i].src = "boom.png";
            el.disabled = true;
        }
        i++;
        guessInput[i].focus();
    })
})
