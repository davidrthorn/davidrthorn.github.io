(function () {
  window['navChange'] = true
})()

window.onscroll = () => {
  var top = document.getElementById('splash-content').getBoundingClientRect().top
  if (!window.navChange) return
  if (top < 50 && window.pageYOffset !== 0 ) {
    showNav()
  } else {
    hideNav()
  }
}

function showNav () {
  $('#main-nav').addClass('main-nav-scrolled')
  $('.main-menu a').addClass('has-text-dark')
  $('#go-down').addClass('go-down-stopped')
}

function hideNav () {
  $('#main-nav').removeClass('main-nav-scrolled')
  $('.main-menu a').removeClass('has-text-dark')
}

$('document').ready(() => {
  $('a').on('click', event => {
    let target = event.currentTarget
    if (target.hash !== '') {
      window.navChange = false
      event.preventDefault()
      var hash = target.hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 400, () => {
        if (hash === '#body') {
          hideNav()
        } else {
          showNav()
        }
        window.navChange = true
      })
    }
  })

  $('.burger-icon').on('click', () => {
    $('.burger-menu').show()
  })
})
