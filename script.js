class Venue {
  static Newnham = new Venue('Newnham Croft Social Club')
  static Tram = new Venue('The Tram Depot')

  constructor (name) {
    this.name = name
  }
}

const events = [
  // NB JS months 0-indexed
  { d: new Date(2026, 1, 4), v: Venue.Tram},
  { d: new Date(2026, 2, 4), v: Venue.Tram},
  { d: new Date(2026, 3, 1), v: Venue.Tram}
]


function nextEv () {
  let now = new Date().setHours(0, 0, 0, 0)
  for (var i = 0; i < events.length; i++) {
    if (events[i].d >= now) break
  }
  return events[i]
}

function format (date) {
  let fmt = Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).formatToParts(
    date
  )
  return (
    ex(fmt, 'weekday') + ' ' + ordinal(ex(fmt, 'day')) + ' ' + ex(fmt, 'month')
  )
}

function ordinal (d) {
  return (
    d +
    (d % 100 < 14 && d % 100 > 10
      ? 'th'
      : d % 10 === 1
      ? 'st'
      : d % 10 === 2
      ? 'nd'
      : d % 10 === 3
      ? 'rd'
      : 'th')
  )
}
function ex (a, t) {
  return a.find(i => i.type === t).value
}

let next = nextEv()

document.getElementById('next-date').textContent = format(next.d)
document.getElementById('next-venue').textContent = next.v.name
if (next.msg !== undefined) {
  document.getElementById('next-msg').innerHTML = next.msg
  document.getElementById('next-msg').style.display = 'block'
}
