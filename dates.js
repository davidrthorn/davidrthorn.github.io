const ordinal = d =>
  d > 10 && d < 21 ? 'th' : ['th', 'st', 'nd', 'rd'][d % 10] ?? 'th'

function nthWedOfMonth (date, n) {
  const d = new Date(date)
  d.setDate(1)
  let currentWed = 0
  while (currentWed < n) {
    if (d.getDay() === 3) {
      currentWed++
    }
    if (currentWed === n) {
      return d
    }
    d.setDate(d.getDate() + 1)
  }
}

function getEvent () {
  const now = new Date()
  const firstWedThisMonth = nthWedOfMonth(now, 1)
  const thirdWedThisMonth = nthWedOfMonth(now, 3)

  if (now.getDate() < firstWedThisMonth.getDate()) {
    return {
      venue: 'The Tram Depot',
      date: firstWedThisMonth
    }
  }
  if (now.getDate() < thirdWedThisMonth.getDate()) {
    return {
      venue: 'Newnham Croft Social Club',
      date: thirdWedThisMonth
    }
  }
  const firstWedNextMonth = nthWedOfMonth(
    new Date(now.setMonth(now.getMonth() + 1)),
    1
  )
  return {
    venue: 'The Tram Depot',
    date: firstWedNextMonth
  }
}

const event = getEvent()
const dateString = event.date
  .toLocaleDateString('en-UK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  .replace(/\w+(\d+)/, (m, n) => `${m}${ordinal(n)}`)

document.getElementById('date').innerHTML = dateString
document.getElementById('venue').innerHTML = event.venue
