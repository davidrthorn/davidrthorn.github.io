(function () {

  window['navChange'] = true

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
    //document.getElementById('main-nav').classList.add('main-nav-scrolled')
    //document.getElementById('main-menu').style.color = 'black'
    //Array.from(document.getElementsByClassName('contact-icon')).forEach(icon => {icon.classList.remove('invert')})
  }

  function hideNav () {
    //document.getElementById('main-nav').classList.remove('main-nav-scrolled')
    //document.getElementById('main-menu').style.color = '#ccc'
    //Array.from(document.getElementsByClassName('contact-icon')).forEach(icon => {icon.classList.add('invert')})
  }


  // Smooth scrolling

  const TIMINGFUNC_MAP = {
    "linear": t => t,
    "ease-in": t => t * t,
    "ease-out": t => t * ( 2 - t  ),
    "ease-in-out": t => ( t < .5 ? 2 * t * t : -1 + ( 4 - 2 * t  ) * t  )
  };

  function scrollTopSmooth( initY, target, duration = 300, timingName = "linear"  ) {  

    const targetY = document.getElementById(target.hash.substr(1)).offsetTop

    console.log(initY - targetY)

    const timingFunc = TIMINGFUNC_MAP[ timingName  ];
    let start = null;

    const step = ( timestamp  ) => {
      // Registers the timestamp of the first frame
      start = start || timestamp

      // Registers the number of milliseconds that have passed
      const progress = timestamp - start

      // Growing from 0 to 1 -- the proportion of the total duration covered so far
      const time = Math.min( 1, ( progress / duration ) )


      // initY is the starting position of the window.
      // The Y offset is calculated a step at a time. 
      // Time keeps changing in steps corresponding to the equation. Each time, this proportion of initY is moved!
      // ...so the new Y offset is the original minus the offset!!!
      window.scrollTo( 0, initY - (  time  * initY  ) + ( initY - targetY )  )

      // MODS:
      // the difference between initY and targetY must be calculated. The sign of the number must translate into direction somehow. 

      // **** replace time with timingFunc(time) when you;ve figured it out

      if ( progress < duration  ) {
        window.requestAnimationFrame( step  );
      }
    }
    window.requestAnimationFrame( step  )  
  }

  // Subscribe any element with [href="#"]
  Array.from( document.querySelectorAll( "[href^='#']"  )  )
    .forEach( btn => {
      btn.addEventListener( "click", ( e  ) => {
        e.preventDefault();
        scrollTopSmooth( window.scrollY, e.currentTarget, 300, "linear"  ); 
      });
    });

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
