const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('change')
})

/* Now here we did array because we will choose all the ".nav-link" and convert the resulting node 
list into an array using the spread operator. */
const navLinks = [...document.querySelectorAll('.nav-link')]

/* So below this comment there will be forEach() and its taking the individual letters and iterate over them. */
navLinks.forEach((link, i) => {
    link.textContent.split("").forEach((letter) => {
        const span = document.createElement('span')
        span.classList.add('letter')
        span.textContent = letter
        link.append(span)
    })
    link.removeChild(link.childNodes[0])
})