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
        title: "+=÷× Tour - Ed Sheeran",
        date: "Fri, 21 Jun 2024",
        venue: "Wembley Stadium",
        category: "MUSIC",

        compare: [
            {
                site: "Ticketmaster",
                base: 150.00,
                hidden_fees: '13.5% + £2.50',
                final: 172.75,
                url: "https://www.ticketmaster.co.uk/"
            },
            {
                site: "Eventbrite",
                base: 150.00,
                hidden_fees: '6.95% + 59p',
                final: 161.02,
                url: "https://www.eventbrite.co.uk/"
            },
            {
                site: "See Tickets",
                base: 150.00,
                hidden_fees: '12% + £2.50',
                final: 170.50,
                url: "https://www.seetickets.com/"
            },
            {
                site: "Skiddle",
                base: 150.00,
                hidden_fees: '10% + 25p',
                final: 165.25,
                url: "https://www.skiddle.com/"
            },
        ]
    },

    {
        title: "Alkaline Trio",
        date: "Fri, 26 Jun 2026",
        venue: "Jera On Air",
        category: "MUSIC",

        compare: [
            {
                site: "Ticketmaster",
                base: 110.00,
                hidden_fees: '13.5% + £2.50',
                final: 127.35,
                url: "https://www.ticketmaster.co.uk/"
            },
            {
                site: "Eventbrite",
                base: 110.00,
                hidden_fees: '6.95% + 59p',
                final: 118.24,
                url: "https://www.eventbrite.co.uk/"
            },
            {
                site: "See Tickets",
                base: 110.00,
                hidden_fees: '12% + £2.50',
                final: 125.7,
                url: "https://www.seetickets.com/"
            },
            {
                site: "Skiddle",
                base: 110.00,
                hidden_fees: '10% + 25p',
                final: 121.25,
                url: "https://www.skiddle.com/"
            },
        ]
    },

    {
        title: "Tight Ends and Friends - Taylor Swift",
        date: "Wed, 24 Jun 2025",
        venue: "Brooklyn Bowl Nashville",
        category: "MUSIC",

        compare: [
            {
                site: "Ticketmaster",
                base: 75.00,
                hidden_fees: '13.5% + £2.50',
                final: 87.62,
                url: "https://www.ticketmaster.co.uk/"
            },
            {
                site: "Eventbrite",
                base: 75.00,
                hidden_fees: '6.95% + 59p',
                final: 80.8,
                url: "https://www.eventbrite.co.uk/"
            },
            {
                site: "See Tickets",
                base: 75.00,
                hidden_fees: '12% + £2.50',
                final: 86.5,
                url: "https://www.seetickets.com/"
            },
            {
                site: "Skiddle",
                base: 75.00,
                hidden_fees: '10% + 25p',
                final: 82.75,
                url: "https://www.skiddle.com/"
            },
        ]
    },

    {
        title: "Cold Play",
        date: "Fri, 26 Jun 2026",
        venue: "Martha's Vineyard Performing Arts Center",
        category: "MUSIC",

        compare: [
            {
                site: "Ticketmaster",
                base: 98.00,
                hidden_fees: '13.5% + £2.50',
                final: 113.73,
                url: "https://www.ticketmaster.co.uk/"
            },
            {
                site: "Eventbrite",
                base: 98.00,
                hidden_fees: '6.95% + 59p',
                final: 105.4,
                url: "https://www.eventbrite.co.uk/"
            },
            {
                site: "See Tickets",
                base: 98.00,
                hidden_fees: '12% + £2.50',
                final: 112.26,
                url: "https://www.seetickets.com/"
            },
            {
                site: "Skiddle",
                base: 98.00,
                hidden_fees: '10% + 25p',
                final: 108.05,
                url: "https://www.skiddle.com/"
            },
        ]
    },

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
                        <th>Hidden_fees</th>
                        <th>Total</th>
                    </tr>
                    ${eventData.compare.map(site => `
                        <tr>
                            <td><a href="${site.url}" target="_blank">${site.site}</a></td>
                            <td>£${site.base.toFixed(2)}</td>
                            <td>£${site.hidden_fees}</td>
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
