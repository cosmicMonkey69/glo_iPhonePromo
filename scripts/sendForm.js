(function() {

    const btnOpenModal = document.querySelector('.card-details__button_delivery')
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTitle = modal.querySelector('.modal__title')
    const btnCloseModal = document.querySelector('.modal__close')
    const modalForm = modal.querySelector('form')
    

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden'
        modalTitle.textContent = cardDetailsTitle.textContent
    })

    btnCloseModal.addEventListener('click', () => {
        closeModal()
    })

    modalForm.addEventListener('submit', e => {
        e.preventDefault()

        const sendMessage = {}

        const labels = modalForm.querySelectorAll('label')
        labels.forEach((label) => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(() => {
            closeModal()
        })
    })

    const closeModal = () => {
        modal.style.display = 'none'
        document.body.style.overflow = ''
        modalForm.reset()
    }

})()