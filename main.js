(function () {

  window['navChange'] = true

  window.onscroll = () => {
    var top = document.getElementById('splash-content').getBoundingClientRect().top
    if (!window.navChange) return
    if (top < 50 && window.pageYOffset !== 0) {
      showNav()
    } else {
      hideNav()
    }
  }

  function showNav () {
    document.getElementById('main-nav').classList.add('main-nav-scrolled')
    document.getElementById('main-menu').style.color = 'black'
    Array.from(document.getElementsByClassName('contact-icon')).forEach(icon => {icon.classList.remove('invert')})
  }

  function hideNav () {
    document.getElementById('main-nav').classList.remove('main-nav-scrolled')
    document.getElementById('main-menu').style.color = '#ccc'
    Array.from(document.getElementsByClassName('contact-icon')).forEach(icon => {icon.classList.add('invert')})
  }


  // Smooth scrolling

  const TIMINGFUNC_MAP = {
    "linear": t => t,
    "ease-in": t => t * t,
    "ease-out": t => t * (2 - t),
    "ease-in-out": t => (t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
  }

  function scrollTopSmooth (initY, targetY, duration = 300, timingName = "linear") {  
    const timingFunc = TIMINGFUNC_MAP[ timingName  ]
    let start = null

    const step = (timestamp) => {
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

  Array.from(document.querySelectorAll("[href^='#']"))
    .forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = e.currentTarget.hash.substr(1)
        const targetY = targetId !== 'body' ? document.getElementById(targetId).offsetTop -60 : 0
        scrollTopSmooth(window.scrollY, targetY, 200, "ease-in-out") 
      })
    })

  var swapVideo = document.getElementById('swap-video').getElementsByTagName('video')[0]

  swapVideo.addEventListener('mouseover', e => {
    e.currentTarget.play()
  })
  swapVideo.addEventListener('mouseleave', e => {
    e.currentTarget.pause()
  })


  Array.from(document.getElementsByClassName('wipe-slider')).forEach(el => {
    el.addEventListener('input', e => {
      e.currentTarget.parentElement.querySelector('.wipe-panel').style.width = el.value + '%'
    })
  })

})()
