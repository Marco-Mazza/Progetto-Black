let navbar = document.querySelector('.navbar-moon');
let moon = document.querySelector('.bi-moon-fill')

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        navbar.classList.add('scrolled')
        moon.style.color = 'var(--main)'
    } else {
        navbar.classList.remove('scrolled')
        moon.style.color = ''
    }
})