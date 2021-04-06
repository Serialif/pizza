window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

let nav = document.getElementById('nav')
let footer = document.getElementById('footer')

window.addEventListener('scroll', () => {
    if (screen.width >= 800) {
        let rect = nav.getBoundingClientRect()
        if (rect.y <= 0) {
            nav.style.opacity = '1'
        } else {
            nav.style.opacity = '0.6'
        }
    } else {
        let rect = footer.getBoundingClientRect()
        let a = screen.height - rect.top - rect.height
        if (a > -22) {
            nav.style.bottom = '20px'
        } else {
            nav.style.bottom = '0'
        }
    }
})

ScrollReveal().reveal('.scrollRevealLeft', {
    delay: 200,
    duration: 600,
    opacity: 0,
    distance: '1000px',
    origin: 'left',
    scale: 0,
    rotate: {
        x: -180,
        y: -180,
    },
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.scrollRevealRight', {
    delay: 200,
    duration: 600,
    opacity: 0,
    distance: '1000px',
    origin: 'right',
    scale: 0,
    rotate: {
        x: -180,
        y: -180,
    },
    easing: 'ease-in-out'
})



