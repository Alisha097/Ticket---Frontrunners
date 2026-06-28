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
        title: "Harry Potter and the cursed child",
        date: "Thu, 28 May 2026",
        venue: "Palace Theatre, London West End",
        category: "THEATRE",

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
        title: "Unruly Comedy",
        date: "Fri, 26 Jun 2026",
        venue: "London . Big Belly Bar & Comedy Club London",
        category: "COMEDY",

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
        ]
    },

    {
        title: "Sculpt&Sip: Creative Pottery Workshop",
        date: "Mon, 13 Jul 2025",
        venue: "London · The Ministry, Borough",
        category: "POTTERY",

        compare: [
            {
                site: "Ticketmaster",
                base: 75.00,
                hidden_fees: '13.5% + £2.50',
                final: 87.62,
                url: "https://www.ticketmaster.co.uk/"
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
        title: "Stranger Things",
        date: "Fri, 7 Jun 2024",
        venue: "Phoenix Theatre",
        category: "THEATRE",

        compare: [
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
