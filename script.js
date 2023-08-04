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

const events = [
    // NB JS months 0-indexed
    {d: new Date(2023, 3, 5), v: Venue.Tram},
    {d: new Date(2023, 3, 19), v: Venue.Newnham},
    {d: new Date(2023, 4, 3), v: Venue.Tram},
    {d: new Date(2023, 4, 17), v: Venue.Newnham},
    {d: new Date(2023, 5, 7), v: Venue.Tram},
    {d: new Date(2023, 5, 21), v: Venue.Newnham},
    {d: new Date(2023, 6, 5), v: Venue.Tram},
    {d: new Date(2023, 6, 19), v: Venue.Newnham},
    {d: new Date(2023, 8, 6), v: Venue.Tram, msg:"The Speakeasies are taking a break in August. See you in September!"},
    {d: new Date(2023, 8, 20), v: Venue.Newnham},
    {d: new Date(2023, 9, 4), v: Venue.Tram},
    {d: new Date(2023, 9, 18), v: Venue.Newnham},
    {d: new Date(2023, 10, 1), v: Venue.Tram},
    {d: new Date(2023, 10, 15), v: Venue.Newnham},
    {d: new Date(2023, 11, 6), v: Venue.Tram},
    {d: new Date(2023, 11, 20), v: Venue.Newnham}
];

function nextEv() {
    let now = new Date().setHours(0,0,0,0);
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
    return d + ((d % 100 < 14 && d % 100 > 10) ? "th" : d % 10 === 1 ? "st" : d % 10 === 2 ? "nd" : d % 10 === 3 ? "rd" : "th");
}
function ex(a, t) {
    return a.find(i => i.type === t).value;
}

let next = nextEv();

document.getElementById("next-date").textContent = format(next.d);
document.getElementById("next-venue").textContent = next.v.name;
if (next.msg !== undefined) {
    document.getElementById("next-msg").textContent = next.msg;
    document.getElementById("next-msg").style.display = "block";
}