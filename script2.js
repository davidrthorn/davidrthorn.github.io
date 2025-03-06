document.getElementById("header").addEventListener('click', () => {
    window.location.href = "index.html";
});

document.getElementById('email').addEventListener('click', () => {
    // Prevent crawlers from getting the email address.
    const instruction = 'mailto'
    const name = 'cambridgejazzclub'
    const domain = 'meeprophone'
    const suffix = 'com'

    window.location.href = `${instruction}:${name}@${domain}.${suffix}`
})
