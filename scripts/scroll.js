(function() {

const links = document.querySelectorAll('.header-menu__item a')
const linkByCharacteristics = document.querySelector('.card-details__link-characteristics')

const allLinks = [...links, linkByCharacteristics]

seamless.polyfill()

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        
        if(section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            })
        }
    })
})

})()