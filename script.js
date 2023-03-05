const currentPanel = 'home'

document.querySelector('#menu-icon').addEventListener('click', () => {
  const menu = document.querySelector('#menu')
  menu.style.height = menu.style.height === '0px' ? '180px' : '0px'
})

const panels = ['home', 'photo', 'video', 'play', 'contact']

panels.forEach(clickedPanel => {
  document
    .querySelector(`#${clickedPanel}-button`)
    .addEventListener('click', () => {
      panels.forEach(p => {
        document.querySelector(`#${p}-panel`).style.opacity =
          p === clickedPanel ? 1 : 0
      })
    })
})
