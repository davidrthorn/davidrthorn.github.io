class Venue {
    static Newnham = new Venue("Newnham Croft Social Club");
    static Tram = new Venue("The Tram Depot");

    constructor(name) {
        this.name = name;
    }
}

const events = [
    // NB JS months 0-indexed
    {d: new Date(2024, 0, 17), v: Venue.Newnham, msg:"//&nbsp;Owing to circumstances beyond our control, the Tram Depot Speakeasy on <i>10th January</i> is cancelled. <br/>It will resume in February.&nbsp;\\\\"},
    {d: new Date(2024, 1, 7), v: Venue.Tram},
    {d: new Date(2024, 1, 21), v: Venue.Newnham},
    {d: new Date(2024, 2, 6), v: Venue.Tram},
    {d: new Date(2024, 2, 20), v: Venue.Newnham},
    {d: new Date(2024, 3, 3), v: Venue.Tram},
    {d: new Date(2024, 3, 17), v: Venue.Newnham},
    {d: new Date(2024, 4, 1), v: Venue.Tram},
    {d: new Date(2024, 4, 15), v: Venue.Newnham},
    {d: new Date(2024, 5, 5), v: Venue.Tram},
    {d: new Date(2024, 5, 19), v: Venue.Newnham},

    {d: new Date(2024, 6, 3), v: Venue.Tram},
    {d: new Date(2024, 6, 17), v: Venue.Newnham},
    {d: new Date(2024, 8, 4), v: Venue.Tram, msg:"There will be no sessions during August.<br/>See you in September!"},
    {d: new Date(2024, 8, 18), v: Venue.Newnham},
    {d: new Date(2024, 9, 2), v: Venue.Tram},
    {d: new Date(2024, 9, 16), v: Venue.Newnham},
    {d: new Date(2024, 10, 6), v: Venue.Tram},
    {d: new Date(2024, 10, 20), v: Venue.Newnham},
    {d: new Date(2024, 11, 4), v: Venue.Tram},
    {d: new Date(2024, 11, 18), v: Venue.Newnham},

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
    document.getElementById("next-msg").innerHTML = next.msg;
    document.getElementById("next-msg").style.display = "block";
}