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
  document.getElementById('main-nav').classList.add('main-nav-scrolled')
  document.getElementById('main-menu').style.color('#666')
  document.getElementById('contact-menu').getElements('img').classList.remove('invert')
}

function hideNav () {
  $('#main-nav').removeClass('main-nav-scrolled')
  $('.main-menu a').css('color', 'white')
  $('.contact-menu img').addClass('invert')
}

$('document').ready(() => {
  var $root = $('html, body')

  $('a').on('click', event => {
    let target = event.currentTarget

    if (target.hash !== '') {
      window.navChange = false
      event.preventDefault()
      var hash = target.hash

      $root.animate({
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

  $("#swap-video video").hover( hoverVideo, hideVideo )

  function hoverVideo () {
    this.play()
  }

  function hideVideo () {
    this.pause()
  }

  $('.wipe-slider').on('input', function () {
    $('.wipe-panel').css('width', $(this).val() + '%')
  })



})
