document.querySelector('#menu-icon').addEventListener('click', () => {
  const menu = document.querySelector('#menu')
  menu.style.height = menu.style.height === '0px' ? '180px' : '0px'
})
