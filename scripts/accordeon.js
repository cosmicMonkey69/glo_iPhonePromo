(function () {

    const chItems = document.querySelectorAll('.characteristics__item')

    chItems.forEach(item => {
        const chButton = item.querySelector('.characteristics__title')
        const chContent = item.querySelector('.characteristics__description')

        tabsClose()

        chButton.addEventListener('click', () => {
            if(chContent.classList.contains('open')) {
                chContent.style.height = ''
            } else {
                tabsClose()
                chContent.style.height = chContent.scrollHeight + 'px'    
            }
            chButton.classList.toggle('active')
            chContent.classList.toggle('open')
        })
        
    })

    function tabsClose () {
        chItems.forEach(item => {
            const chContent = item.querySelector('.characteristics__description')
            const chButton = item.querySelector('.characteristics__title')

            chContent.style.height = ''
            chButton.classList.remove('active')
            chContent.classList.remove('open')
        })
    }

})()