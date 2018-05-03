(function () {

  const newLocal = 'navChange';
  window[newLocal] = true


  // Show/hide the top navigation bar

  window.onscroll = () => {
    if (!window.navChange) return

    const targetY = document.getElementById('splash')
      .getElementsByTagName('div')[0]
      .getBoundingClientRect().top

    if (targetY < 50 && window.pageYOffset !== 0) {
      showNav()
    } else {
      hideNav()
    }
  }

  function showNav () {
    document.getElementById('navbar')
      .classList.add('navbar--scrolled')

    document.getElementById('main-menu')
      .style.color = 'black'

    Array.from(document.getElementsByClassName('contact-icon'))
      .forEach(icon => {
        icon.classList.remove('inverted')
      })
  }

  function hideNav () {
    document.getElementById('navbar')
      .classList.remove('navbar--scrolled')

    document.getElementById('main-menu')
      .style.color = '#ccc'

    Array.from(document.getElementsByClassName('contact-icon'))
      .forEach(icon => {
        icon.classList.add('inverted')
      })
  }


  // Smooth scroll from anchor tags

  const transitionEqu = {
    'linear': t => t,
    'ease-in': t => t * t,
    'ease-out': t => t * (2 - t),
    'ease-in-out': t => (t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
  }

  function scrollTopSmooth (initY, targetY, duration = 300, transition = 'linear') {
    const timingFunc = transitionEqu[transition]
    let start = null

    const step = timestamp => {
      start = start || timestamp
      const progress = timestamp - start
      const time = Math.min(1, (progress / duration))

      window.scrollTo(0, initY - (timingFunc(time) * (initY - targetY)))

      if (progress < duration) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  Array.from(document.querySelectorAll(`[href^='#']`))
    .forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault()
        const targetId = e.currentTarget.hash.substr(1)
        const targetY = targetId !== 'body'
          ? document.getElementById(targetId).offsetTop - 60
          : 0

        scrollTopSmooth(window.scrollY, targetY, 200, 'ease-in-out')
      })
    })


  // Play video on hover

  var swapVideo = document.getElementsByTagName('video')[0]

  swapVideo.addEventListener('mouseover', e => {
    e.currentTarget.play()
  })
  swapVideo.addEventListener('mouseleave', e => {
    e.currentTarget.pause()
  })


  // Image wipe reveal

  Array.from(document.getElementsByClassName('wipe-slider'))
    .forEach(el => {
      el.addEventListener('input', e => {
        e.currentTarget
          .parentElement.querySelector('.wipe-panel')
          .style.width = el.value + '%'
      })
  })

})()