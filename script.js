class Venue {
  static Newnham = new Venue('Newnham Croft Social Club')
  static Tram = new Venue('The Tram Depot')

  constructor (name) {
    this.name = name
  }
}

const events = [
  // NB JS months 0-indexed
  { d: new Date(2025, 2, 5), v: Venue.Tram},
  { d: new Date(2025, 2, 19), v: Venue.Newnham },
  { d: new Date(2025, 3, 2), v: Venue.Tram,
    msg: '<<&nbsp;There is no Newnham Speakeasy in April.&nbsp;>>' },
  { d: new Date(2025, 4, 7), v: Venue.Tram,
    msg: '<<&nbsp;There is no Newnham Speakeasy in April.&nbsp;>>' },
  { d: new Date(2025, 4, 21), v: Venue.Newnham },
  { d: new Date(2025, 5, 4), v: Venue.Tram },
  { d: new Date(2025, 5, 18), v: Venue.Newnham },

  { d: new Date(2025, 6, 2), v: Venue.Tram,
    msg: '<<&nbsp;There is no Newnham Speakeasy in July.&nbsp;>>' },
  { d: new Date(2025, 8, 3), v: Venue.Tram,
    msg: '<<&nbsp;There are no Speakeasies during August.&nbsp;>>'  },
  { d: new Date(2025, 8, 17), v: Venue.Newnham },
  { d: new Date(2025, 9, 1), v: Venue.Tram },
  { d: new Date(2025, 9, 15), v: Venue.Newnham },
  { d: new Date(2025, 10, 5), v: Venue.Tram },
  { d: new Date(2025, 10, 19), v: Venue.Newnham },
    { d: new Date(2025, 11, 3), v: Venue.Tram },
    { d: new Date(2025, 11, 17), v: Venue.Newnham },
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
