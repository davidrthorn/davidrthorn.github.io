const currentPanel = 'home'

document.querySelector('#menu-icon').addEventListener('click', () => {
  const menu = document.querySelector('#menu')
  menu.style.height = menu.style.height === '0px' ? '180px' : '0px'
})

const panels = ['home', 'photo', 'play', 'contact']

panels.forEach(clickedPanel => {
  document
    .querySelector(`#${clickedPanel}-button`)
    .addEventListener('click', () => {
      panels.forEach(p => {
        document.querySelector(`#${p}-panel`).style.opacity =
          p === clickedPanel ? 1 : 0
      })
      const menu = document.querySelector('#menu')
      menu.style.height = menu.style.height === '0px' ? '180px' : '0px'
    })
})

// Don't use built in HTML mailto because the address will be crawled and spammed.
document.querySelector('.email-address').addEventListener('click', () => {
  const email = { name: 'david', domain: 'gmail.com' }
  window.location.href = `mailto:${email.name}@${email.domain}`
})
