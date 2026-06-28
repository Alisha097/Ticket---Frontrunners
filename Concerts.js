document.querySelector("button").addEventListener("click",function(){

alert("Search feature coming soon!");

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

const musicEvents = [
    {
        title: "Jack White — Live in London",
        date: "Tue, 26 Aug 2026",
        venue: "Hammersmith Apollo",
        category: "MUSIC",
        image: "images/jack-white.jpg",

        compare: [
            {
                site: "Ticketmaster",
                base: 120.00,
                final: 148.50,
                url: "https://ticketmaster.co.uk/jack-white"
            },
            {
                site: "AXS",
                base: 118.00,
                final: 142.00,
                url: "https://axs.com/jack-white"
            },
            {
                site: "See Tickets",
                base: 115.00,
                final: 139.00,
                url: "https://seetickets.com/jack-white"
            }
        ]
    },

    // add more events...
];

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("compareModal");
    const modalTable = document.getElementById("compareTable");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll(".primary-btn").forEach(btn => {
        btn.addEventListener("click", () => {

            const eventTitle = btn.closest(".event-details").querySelector("h3").innerText;
            const eventData = musicEvents.find(ev => ev.title === eventTitle);

            if (!eventData || !eventData.compare) return;

            modalTable.innerHTML = `
                <table>
                    <tr>
                        <th>Website</th>
                        <th>Base</th>
                        <th>Total</th>
                    </tr>
                    ${eventData.compare.map(site => `
                        <tr>
                            <td><a href="${site.url}" target="_blank">${site.site}</a></td>
                            <td>£${site.base.toFixed(2)}</td>
                            <td>£${site.final.toFixed(2)}</td>
                        </tr>
                    `).join("")}
                </table>
            `;

            modal.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });

});
