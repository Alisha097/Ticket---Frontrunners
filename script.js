// ==========================================
// PRICEDIN - SCRIPT.JS
// ==========================================

// ===========================
// Slider
// ===========================

const cards = document.getElementById("cards");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (nextBtn && prevBtn && cards) {

    nextBtn.addEventListener("click", () => {

        cards.scrollBy({
            left: 340,
            behavior: "smooth"
        });

    });

    prevBtn.addEventListener("click", () => {

        cards.scrollBy({
            left: -340,
            behavior: "smooth"
        });

    });

}

// ===========================
// Favourite Hearts
// ===========================

const hearts = document.querySelectorAll(".favourite");

hearts.forEach((heart) => {

    heart.addEventListener("click", function () {

        this.classList.toggle("active");

        if (this.classList.contains("active")) {

            this.classList.remove("fa-regular");
            this.classList.add("fa-solid");

        } else {

            this.classList.remove("fa-solid");
            this.classList.add("fa-regular");

        }

    });

});

// ===========================
// Navbar Smooth Scroll
// ===========================

const eventsLink = document.getElementById("events-link");

if (eventsLink) {

    eventsLink.addEventListener("click", function (e) {

        e.preventDefault();

        document.getElementById("popular-events").scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

}

// ===========================
// Category Buttons
// ===========================

const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

// ===========================
// Card Hover Animation
// ===========================

const cardsList = document.querySelectorAll(".event-card");

cardsList.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s ease";

    });

});

// ===========================
// View All Button
// ===========================

const viewAll = document.querySelector(".view-all");

if (viewAll) {

    viewAll.addEventListener("click", function (e) {

        e.preventDefault();

        cards.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

}

// ===========================
// Console Message
// ===========================

console.log("PricedIn Loaded Successfully");