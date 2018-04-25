window.onscroll = function () {
  let top = document.getElementById('splash-content').getBoundingClientRect().top
  if ( top < 200 && this.pageYOffset !== 0 ) {
    navShrink()
  } else {
    navGrow()
  }
}

function navShrink () {
  document.getElementById( 'main-nav' ).classList.add( 'main-nav-scrolled' )
  document.getElementById( 'dev-name' ).classList.add( 'transparent' )
  document.getElementById('go-down').classList.add('go-down-stopped')
}

function navGrow () {
  document.getElementById( 'main-nav' ).classList.remove( 'main-nav-scrolled' )
  document.getElementById( 'dev-name' ).classList.remove( 'transparent' )
}