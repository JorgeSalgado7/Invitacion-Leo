let WINDOW_HEIGHT = document.documentElement.clientHeight
const hero = document.getElementById('body')
let screen_width = window.matchMedia("(max-width: 992px)")

hero.style.height = `${WINDOW_HEIGHT}px`