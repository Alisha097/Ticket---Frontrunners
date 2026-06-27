document.querySelector("button").addEventListener("click",function(){

alert("Search feature coming soon!");

});

const cards = document.getElementById("cards");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Next button
next.addEventListener("click", () => {

    cards.scrollBy({
        left: 340,
        behavior: "smooth"
    });

});

// Previous button
prev.addEventListener("click", () => {

    cards.scrollBy({
        left: -340,
        behavior: "smooth"
    });

});

// Favourite Heart Toggle
document.querySelectorAll(".favourite").forEach((heart) => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");

        if (heart.classList.contains("fa-solid")) {
            heart.style.color = "#ff5479";
        } else {
            heart.style.color = "#444";
        }

    });

});