document.getElementById('email').addEventListener('click', () => {
    // Prevent crawlers from getting the email address.
    const instruction = 'mailto'
    const name = 'davidrowthorn'
    const domain = 'gmail'
    const suffix = 'com'

    window.location.href = `${instruction}:${name}@${domain}.${suffix}`
})

class Venue {
    static Newnham = new Venue("Newnham Croft Social Club");
    static Tram = new Venue("The Tram Depot");

    constructor(name) {
        this.name = name;
    }
}

var events = [
    {d: new Date(2023, 3, 5), v: Venue.Tram},
    {d: new Date(2023, 3, 19), v: Venue.Newnham},
    {d: new Date(2023, 4, 3), v: Venue.Tram},
    {d: new Date(2023, 4, 17), v: Venue.Newnham},
    {d: new Date(2023, 5, 7), v: Venue.Tram},
    {d: new Date(2023, 5, 21), v: Venue.Newnham},
    {d: new Date(2023, 6, 5), v: Venue.Tram},
    {d: new Date(2023, 6, 19), v: Venue.Newnham},
    {d: new Date(2023, 7, 2), v: Venue.Tram},
    {d: new Date(2023, 7, 16), v: Venue.Newnham},
    {d: new Date(2023, 8, 6), v: Venue.Tram},
    {d: new Date(2023, 8, 20), v: Venue.Newnham},
    {d: new Date(2023, 9, 4), v: Venue.Tram},
    {d: new Date(2023, 9, 18), v: Venue.Newnham},
    {d: new Date(2023, 10, 1), v: Venue.Tram},
    {d: new Date(2023, 10, 15), v: Venue.Newnham},
    {d: new Date(2023, 11, 6), v: Venue.Tram},
    {d: new Date(2023, 11, 20), v: Venue.Newnham}
];

function nextEv() {
    let now = Date.now();
    for (var i = 0; i < events.length; i++) {
        if (events[i].d >= now) break;
    }
    return events[i];
}

function format(date) {
    let fmt = Intl.DateTimeFormat('en-GB', {dateStyle: 'full'}).formatToParts(date);
    return ex(fmt, 'weekday') + " " + ordinal(ex(fmt, 'day')) + " " + ex(fmt, 'month');
}

function ordinal(d) {
    return d + (d % 10 === 1 ? "st" : d % 10 === 2 ? "nd" : d % 10 === 3 ? "rd" : "th");
}
function ex(a, t) {
    return a.find(i => i.type === t).value;
}

let next = nextEv();

document.getElementById("next-date").textContent = format(next.d);
document.getElementById("next-venue").textContent = next.v.name;
