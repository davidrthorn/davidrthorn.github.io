document.getElementById('email').addEventListener('click', () => {
  // Prevent crawlers from getting the email address.
  const instruction = 'mailto'
  const name = 'davidrowthorn'
  const domain = 'gmail'
  const suffix = 'com'

  window.location.href = `${instruction}:${name}@${domain}.${suffix}`
})
