(function () {
  // Show/hide the top navigation bar

  window.onscroll = () => {
    const targetY = document.getElementById('splash')
      .getElementsByTagName('div')[0]
      .getBoundingClientRect().top

    let arrived = targetY < 50
    let [opacity, color, invert] = arrived ? [1, 'black', 0] : [0, '#ccc', 1]

    document.getElementById('navbar')
      .style.opacity = opacity
    document.getElementById('main-menu')
      .style.color = color
    Array.from(document.getElementsByClassName('contact-icon'))
      .forEach(i => {
        i.style.filter = `invert(${invert})`
      })
    }

  // Smooth scroll from anchor tags

  const transitionEqu = {
    'linear': t => t,
    'ease-in': t => t * t,
    'ease-out': t => t * (2 - t),
    'ease-in-out': t => (t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
  }

  function scrollTopSmooth (initY, targetY, duration = 300, transition = 'ease-in-out') {
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
          ? document.getElementById(targetId).offsetTop - 53
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

  Array.from(document.getElementsByClassName('wipe__slider'))
    .forEach(el => {
      el.addEventListener('input', e => {
        e.currentTarget
          .parentElement.querySelector('.wipe__panel')
          .style.width = el.value + '%'
      })
  })

})()
